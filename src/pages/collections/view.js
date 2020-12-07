import React, { useState, useEffect } from "react";
import axios from "axios";
import { convertImage } from "../../utils/helpers"

// Components
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import PictureGrid from "../../components/PictureGrid";
import Loader from "../../components/Loader"


// Styles
import styles from "../../styles/pages/collections-view.module.scss"

const View = ({ location }) => {
    const [isLoading, setLoading] = useState(true);
    const [asset, setAsset] = useState();
    const [showModal, setShowModal] = useState(false);

    // Get Asset ID or Redirect
    let assetID = location.search;
    if (location.search) {
        assetID = assetID.replace("?", '')
    } else {
        window.location.replace("/collections")
    }

    // Hooks
    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.API_URL}/assets/${assetID}`
        })
            .then(result => {
                setAsset(result.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    // Helpers


    const hideModal = () => {
        setShowModal(false);
    }

    // Components
    const EnquireModal = () => {
        return (
            <div className={styles.modal}>
                <i className={`${styles.remove} material-icons`} onClick={hideModal}>close</i>
                <form className={styles.form} name="enquiry" method="post" data-netlify="true" >
                    <h1>Enquiry Form</h1>
                    <h3>{asset.name}</h3>
                    <input type="hidden" name="form-name" value="enquiry" />
                    <input type="hidden" name="asset" value={asset.name} />
                    <input type="hidden" name="collection" value={asset.collectionType} />
                    <input type="text" name="name" placeholder="Your Name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <textarea name="message" placeholder="Your Message" />
                    <button type="submit" className="button">
                        <a>Send Enquiry</a>
                    </button>
                </form>
            </div>
        )
    }

    // Rendering

    if (isLoading) {
        return <Loader text="Loading Artwork..." />
    }

    return (
        <Layout
            pageMeta={{
                title: `${asset.name} | Art by Jaret`,
                description: `${asset.description}`,
                canonical: `/collections/view?${assetID}`,
            }}
        >
            <PictureGrid collection={true} image={convertImage(asset.image, 600)} bottomMargin={true}>
                <div className={styles.grid}>
                    <h1 className={styles.name}>{asset.name}</h1>
                    <p className={styles.description}>{asset.description}</p>
                    <p className={styles.availability}>{asset.availability ? "Available" : "Sold"}</p>
                    <div className={styles.metaInfo}>
                        <p>
                            <span>Date:</span>
                            {asset.date}
                        </p>
                        <p>
                            <span>Medium:</span>
                            {asset.medium}
                        </p>
                        <p>
                            <span>Size:</span>
                            {asset.size}
                        </p>
                    </div>
                    <button className="button" onClick={() => setShowModal(true)}>
                        <a>Enquire</a>
                    </button>
                </div>
            </PictureGrid>
            {showModal ? <EnquireModal /> : null}
        </Layout>
    )
}

export default View
