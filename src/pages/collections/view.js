import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import PictureGrid from "../../components/PictureGrid";

// Styles


const View = ({ location }) => {
    const [isLoading, setLoading] = useState(true);
    const [asset, setAsset] = useState();


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
            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    // Rendering

    if (isLoading) {
        return <div className="App">Loading...</div>;
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
            >
                <PictureGrid collection={true} image={asset.image}>
                    <h1>{asset.name}</h1>
                    <p>{asset.description}</p>
                    <p>{asset.availability ? "Available" : "Sold"}</p>
                    <div>
                        <p>
                            <span>Date</span>
                            {asset.date}
                        </p>
                        <p>
                            <span>Medium</span>
                            {asset.medium}
                        </p>
                        <p>
                            <span>Size</span>
                            {asset.size}
                        </p>
                    </div>
                </PictureGrid>
            </Section>
        </Layout>
    )
}

export default View
