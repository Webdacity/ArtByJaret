import React from 'react';
import { graphql, Link } from "gatsby";
import Img from "gatsby-image"

// Styles
import styles from "../styles/components/picture-grid.module.scss"

const PictureGrid = (props) => {

    const imgStyle = {
        objectFit: "contain"
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.colourBlock}></div>
            <div className={styles.grid}>
                <div className={styles.image}>
                    <div className={styles.imageWrapper}>
                        <Img fluid={props.image} style={{ width: "100%" }} imgStyle={imgStyle} />
                    </div>
                </div>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default PictureGrid;
