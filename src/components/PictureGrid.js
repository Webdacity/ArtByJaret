import React, { useState, useEffect } from 'react';
import Img from "gatsby-image"
import classNames from "classnames";
import { convertImage, hideLoader } from "../utils/helpers";

// Components
import BrushAnimation from "./BrushAnimation"

// Styles
import styles from "../styles/components/picture-grid.module.scss";

// Animation
import Fade from 'react-reveal/Fade';
import { SideBySideMagnifier } from "react-image-magnifiers";

const PictureGrid = (props) => {
    const [imageIndex, setImageIndex] = useState(0);

    // Styles
    const gridClasses = classNames(
        styles.pictureGrid,
        props.reverse ? styles.reverse : "",
        props.landing ? styles.landing : "",
        props.collection ? styles.collection : "",
        props.bottomMargin ? styles.bottomMargin : "",
        props.fullHeight ? styles.fullHeight : "",
    )

    const colourBlockClasses = classNames(
        styles.colourBlock,
        styles[props.colour]
    )

    const imgStyle = {
        objectFit: "contain"
    }

    const imageContainerStyles = classNames(
        styles.imageContainer,
        props.arrows ? styles.withArrows : ""
    )

    // Helpers
    const prevImage = () => {
        if (imageIndex > 0) {
            let newImageIndex = imageIndex - 1
            setImageIndex(newImageIndex)
        }
    }

    const nextImage = () => {
        if (imageIndex < props.images.length) {
            let newImageIndex = imageIndex + 1
            setImageIndex(newImageIndex)
        }
    }


    // Components

    const Image = () => {

        if (props.gatsbyImage) {
            return <Img loading="eager" durationFadeIn={100} onLoad={() => hideLoader()} fluid={props.gatsbyImage} style={{ width: "100%" }} imgStyle={imgStyle} />
        }

        else {
            hideLoader()
            return (
                <>
                    <SideBySideMagnifier imageSrc={convertImage(props.images ? props.images[imageIndex] : props.image, 800)} alwaysInPlace={true} />
                </>
            )
        }
    }

    return (
        <div className={gridClasses}>
            {props.reverse ? <Fade right><div className={colourBlockClasses}></div></Fade> : <Fade left><div className={colourBlockClasses}></div></Fade>}
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.image}>
                        <div className={imageContainerStyles}>
                            <Image />
                            {props.arrows && props.images.length > 1 ? <div className={styles.arrows}>
                                <i className="material-icons" onClick={prevImage}>
                                    keyboard_arrow_left
                                </i>
                                <i className="material-icons" onClick={nextImage}>
                                    keyboard_arrow_right
                                </i>
                            </div> : null}
                        </div>
                    </div>
                    <div className={styles.content}>
                        {props.reverse ? <Fade left> {props.children}</Fade> : <Fade right>{props.children}</Fade>}
                    </div>
                </div>
            </div>
            {/* {props.landing ? <BrushAnimation reverse={props.reverse} /> : null} */}
        </div>
    )
}

export default PictureGrid;
