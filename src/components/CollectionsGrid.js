import React from "react";

import CollectionBlock from "./CollectionsBlock";

// Styles, Images
import styles from "../styles/components/collections-grid.module.scss";

// import CollectionsData from "../assets/data/collections.json";

const CollectionsGrid = (props) => {
    let assets = props.assets;

    return (
        <div className="container">
            <div className={styles.grid}>
                {assets.map(asset => (
                    <CollectionBlock {...asset} to={`/collections/view?${asset._id}`} />
                ))}
            </div>
        </div>
    )
}

export default CollectionsGrid;