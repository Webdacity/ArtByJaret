import React from 'react';
import Img from "gatsby-image";
import { Link, graphql } from "gatsby";

// Styles, Images
import styles from "../styles/components/product-block.module.scss"
import TestArt from "../assets/images/art/test.jpg"

const ProductBlock = () => {
    return (
        <a className={styles.productBlock}>
            <div className={styles.image}>
                <img src={TestArt} alt="" />
            </div>
            <div></div>
            <div className={styles.text}>
                <h5>Portraits</h5>
            </div>
        </a>
    )
}

export default ProductBlock
