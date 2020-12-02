import React from 'react';
import { Link, graphql } from "gatsby";

// Styles, Images
import styles from "../styles/components/product-grid.module.scss"

const ProductGrid = () => {
    return (
        <a className={styles.productBlock}>
            <div className={styles.image}>
                <img src="" alt="" />
            </div>
            <div></div>
            <div className={styles.text}>
                <h5>Portraits</h5>
            </div>
        </a>
    )
}

export default ProductGrid
