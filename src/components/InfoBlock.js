import React from 'react';
import classNames from "classnames";
import Img from "gatsby-image";

// Styles, Images
import styles from "../styles/components/info-block.module.scss";
import Logo from "../assets/images/logos/logo-black.png";


const InfoBlock = (props) => {

    const blockClass = classNames(
        styles.infoBlock,
        props.alignRight ? styles.alignRight : "",
        styles[props.colour]
    );

    const wrapperStyles = {
        // height: '100%'
    }

    const ImgStyle = {
        objectPosition: "center top",
        width: '100%'
    }

    return (
        <div className={blockClass}>
            {/* <img src={Logo} alt="Jaret Logo" className={styles.logo} /> */}
            <div className={styles.grid}>
                <div className={styles.image}>
                    <div className={styles.imageWrapper}>
                        <Img fluid={props.image} style={wrapperStyles} imgStyle={ImgStyle} />
                    </div>
                </div>
                <div className={styles.content}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default InfoBlock
