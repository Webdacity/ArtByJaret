import React from 'react';
import { Link } from "gatsby";
import { convertImage } from "../utils/helpers"


// Styles, Images
import styles from "../styles/components/product-block.module.scss"

const ProductBlock = (props) => {

    if (props.asset) {
        return (
            <Link className={styles.productBlock} to={`/collections/view?${props.id}`} data-category="Original Art Work">
                <div className={styles.image}>
                    <img src={convertImage(props.image, 300)} alt={`${props.name} | Art by Jaret`} />
                </div>
                <div className={styles.text}>
                    <h4 className={styles.name}>{props.name}</h4>
                    <p className={styles.category}>Original Art Work</p>
                    <p className={styles.price}>POA</p>
                </div>
            </Link>
        )
    } else {
        return (
            <Link className={styles.productBlock} to={`/shop/view?${props.id}`} data-category={props.category}>
                <div className={styles.image}>
                    <img src={convertImage(props.thumbnail, 300)} alt={`${props.name} | Art by Jaret`} />
                </div>
                <div className={styles.text}>
                    <h4 className={styles.name}>{props.name}</h4>
                    <p className={styles.category}>{props.category}</p>
                    <p className={styles.price}>{props.price !== 0 ? `R ${props.price}` : `POA`}</p>
                </div>
            </Link>
        )
    }
}

export default ProductBlock
