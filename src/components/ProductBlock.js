import React from 'react';
import Img from "gatsby-image";
import { Link, graphql } from "gatsby";

// Styles, Images
import styles from "../styles/components/product-block.module.scss"

const ProductBlock = (props) => {
    let thumbnail = props.thumbnail;
    thumbnail = thumbnail.replace("upload/v", "upload/w_300/f_auto/v");
    return (
        <Link className={styles.productBlock} to={`/shop/view?${props.id}`}>
            <div className={styles.image}>
                <img src={thumbnail} alt={`${props.name} | Art by Jaret`} />
            </div>
            <div className={styles.text}>
                <h4 className={styles.name}>{props.name}</h4>
                <p className={styles.category}>{props.category}</p>
                <p className={styles.price}>R {props.price}</p>
            </div>
        </Link>
    )
}

export default ProductBlock
