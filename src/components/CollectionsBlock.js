import React from 'react';
import { Link } from "gatsby";
import { convertImage } from "../utils/helpers"


// Styles, Images, Data
import styles from "../styles/components/collections-block.module.scss"

const CollectionBlock = (props) => {
    return (
        <Link className={styles.block} to={props.to}>
            <div className={styles.imageWrapper}>
                <img src={convertImage(props.thumbnail, 300)} alt={`${props.name} collection of Art by Jaret`} />
            </div>
            <h5>{props.name}</h5>
        </Link>
    )
}

export default CollectionBlock;
