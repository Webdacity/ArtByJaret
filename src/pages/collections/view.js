import React, { useState, useEffect } from "react";
import axios from "axios";
import { convertImage } from "../../utils/helpers";
import classNames from "classnames";
import { sendNotification } from "../../components/Notification"



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

    // Get Asset ID or Redirect
    let assetID = location.search;
    if (location.search) {
        assetID = assetID.replace("?", '')
    } else {
        if (typeof window !== 'undefined') {
            window.location.replace("/collections")
        }
    }

    // Hooks
    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.GATSBY_API_URL}/assets/${assetID}`
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
    const showModal = () => {
        let body = document.getElementsByTagName('body')[0];
        body.classList.toggle("noscroll");

        let modal = document.getElementsByClassName(styles.modal)[0];
        modal.classList.remove(styles.hidden)
    }

    const hideModal = () => {
        let body = document.getElementsByTagName('body')[0];
        body.classList.toggle("noscroll");

        let modal = document.getElementsByClassName(styles.modal)[0];
        modal.classList.add(styles.hidden)
    }

    // Components
    const EnquireModal = () => {

        const modalStyles = classNames(
            styles.modal,
            styles.hidden
        );

        const submitEnquireForm = (e) => {
            e.preventDefault();
            let data = {}
            let form = document.getElementById("enquiry-form");
            const formData = new FormData(form);
            formData.forEach((value, key) => data[key] = value);
            console.log(data)

            axios({
                method: "POST",
                url: `${process.env.GATSBY_API_URL}/enquiry`,
                data: data
            })
                .then(result => {
                    if (result.status === 200) {
                        form.reset();
                        hideModal()
                        sendNotification("Thank you for your message. I'll get back to you soon!")
                    } else {
                        hideModal()
                        sendNotification("There seems to be a problem sending your message. Please send your enquiry via email.")
                    }
                })
                .catch(error => {
                    hideModal()
                    console.log(error)
                    sendNotification("There seems to be a problem sending your message. Please send your enquiry via email.")

                })
        }

        return (
            <div className={modalStyles}>
                <i className={`${styles.remove} material-icons`} onClick={hideModal}>close</i>
                <form className={styles.form} id="enquiry-form" name="enquiry" onSubmit={submitEnquireForm}>
                    <h1>Enquiry Form</h1>
                    <h3>{asset.name}</h3>
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
            <PictureGrid collection={true} image={convertImage(asset.image, 600)} bottomMargin={true} fullHeight={true}>
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
                    <button className="button" onClick={showModal}>
                        <a>Enquire</a>
                    </button>
                </div>
            </PictureGrid>
            <EnquireModal />
        </Layout>
    )
}

export default View
