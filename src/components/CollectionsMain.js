import React, { useState, useEffect } from "react";

import CollectionBlock from "./CollectionsBlock";
import axios from "axios";


// Styles, Images
import styles from "../styles/components/collections-main.module.scss";

// import CollectionsData from "../assets/data/collections.json";

const CollectionsMain = () => {
    const [isLoading, setLoading] = useState(true);
    const [collections, setCollections] = useState();

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3000/collections"
        })
            .then(result => {
                console.log(result.data)
                setCollections(result.data);
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
        <div className="container">
            <div className={styles.grid}>
                {collections.map(collection => (
                    collection.home ? <CollectionBlock {...collection} to="/collections" key={collection._id} /> : null
                ))}
            </div>
        </div>
    )
}

export default CollectionsMain;