import React, { useState, useEffect } from "react";
import axios from "axios";

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
    let image;

    // Get Asset ID or Redirect
    let assetID = location.search;
    if (location.search) {
        assetID = assetID.replace("?", '')
    } else {
        window.location.replace("/collections")
    }


    useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:3000/assets/${assetID}`
        })
            .then(result => {
                setAsset(result.data);
                setLoading(false);
                convertImage()
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    // Convert & Optimise Image
    const convertImage = () => {
        image = asset.image.replace("upload/v", "upload/w_300/f_auto/v");
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
            <Section
                fullWidth={true}
                heading={asset.collectionType}
                stroke="blue"
                noMarginBottom={true}
            >
                <PictureGrid collection={true} image={asset.image}>
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
                        <button className="button">
                            <a>Enquire</a>
                        </button>
                    </div>
                </PictureGrid>
            </Section>
        </Layout>
    )
}

export default View
