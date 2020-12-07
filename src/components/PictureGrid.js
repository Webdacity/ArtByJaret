import React from 'react';
import Img from "gatsby-image"
import classNames from "classnames";

// Styles
import styles from "../styles/components/picture-grid.module.scss"

const PictureGrid = (props) => {

    const gridClasses = classNames(
        styles.pictureGrid,
        props.reverse ? styles.reverse : "",
        props.landing ? styles.landing : "",
        props.collection ? styles.collection : "",
        props.bottomMargin ? styles.bottomMargin : ""
    )

    const colourBlockClasses = classNames(
        styles.colourBlock,
        styles[props.colour]
    )

    const imgStyle = {
        objectFit: "contain"
    }

    return (
        <div className={gridClasses}>
            <div className={colourBlockClasses}></div>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.image}>
                        <div className={styles.imageContainer}>
                            {props.gatsbyImage ?
                                <Img fluid={props.gatsbyImage} style={{ width: "100%" }} imgStyle={imgStyle} />
                                : <img src={props.image} className={styles.collection} />}
                        </div>
                    </div>
                    <div className={styles.content}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PictureGrid;
