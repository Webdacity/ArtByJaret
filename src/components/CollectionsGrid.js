import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import CollectionBlock from "./CollectionsBlock";
import Loader from "./Loader";

// Styles, Images
import styles from "../styles/components/collections-grid.module.scss";

// import CollectionsData from "../assets/data/collections.json";

const CollectionsGrid = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [assets, setAssets] = useState();

    useEffect(() => {
        axios({
            method: "GET",
            url: `${process.env.GATSBY_API_URL}/assets/`
        })
            .then(result => {
                setAssets(result.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
            });


    }, []);

    if (props.home) {
        return (
            <div className="container">
                <div className={styles.grid}>
                    {isLoading ? <Loader text="Loading Collections..." /> :
                        assets.map((asset, index) => (
                            asset.home ? <CollectionBlock {...asset} to={`/collections/view?${asset._id}`} key={index} /> : null
                        ))}
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <div className={styles.grid}>
                    {isLoading ? <Loader text="Loading Collections..." /> :
                        assets.map((asset, index) => (
                            <CollectionBlock {...asset} to={`/collections/view?${asset._id}`} key={index} />
                        ))}
                </div>
            </div>
        )
    }
}

export default CollectionsGrid;