import React from 'react';
import { Link } from "gatsby"

// Styles, Images, Data
import styles from "../styles/components/collections-block.module.scss"

const CollectionBlock = (props) => {

    // Convert & Optimise Image
    let thumbnail = props.thumbnail;
    thumbnail = thumbnail.replace("upload/v", "upload/w_300/f_auto/v");
    return (
        <Link className={styles.block} to={props.to}>
            <div className={styles.imageWrapper}>
                <img src={thumbnail} alt={`${props.name} collection of Art by Jaret`} />
            </div>
            <h5>{props.name}</h5>
        </Link>
    )
}

export default CollectionBlock;
