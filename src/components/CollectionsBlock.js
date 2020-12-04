import React from 'react';
import { Link } from "gatsby"

// Styles, Images, Data
import styles from "../styles/components/collections-block.module.scss"

const CollectionBlock = (props) => {
    console.log(props)
    return (
        <Link className={styles.block} to={props.to}>
            <div className={styles.imageWrapper}>
                <img src={props.image} alt={`${props.name} collection of Art by Jaret`} />
            </div>
            <h5>{props.name}</h5>
        </Link>
    )
}

export default CollectionBlock;
