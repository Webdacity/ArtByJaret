import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import CollectionBlock from "./CollectionsBlock";
import Loader from "./Loader";


// Styles, Images
import styles from "../styles/components/collections-main.module.scss";

// import CollectionsData from "../assets/data/collections.json";

const CollectionsMain = () => {
    const [isLoading, setLoading] = useState(true);
    const [collections, setCollections] = useState();

    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.API_URL}/collections`
        })
            .then(result => {
                setCollections(result.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);



    // Rendering

    if (isLoading) {
        return <Loader text="Loading Collections..." />
    }

    return (
        <div className="container">
            <div className={styles.grid}>
                {collections.map((collection, index) => (
                    collection.home ? <CollectionBlock {...collection} to="/collections" key={index} /> : null
                ))}
            </div>
        </div>
    )
}

export default CollectionsMain;