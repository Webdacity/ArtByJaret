import React from 'react';
import classNames from "classnames";

// Styles, Images, Fonts
import styles from "../styles/components/section.module.scss"
import GreenStroke from "../assets/images/sections/green.svg";
import BlueStroke from "../assets/images/sections/blue.svg";

// Animation
import Fade from 'react-reveal/Fade';

const Section = (props) => {
    let sectionClass = classNames(
        styles.section,
        props.fullWidth ? styles.fullWidth : "",
        props.fullHeight ? styles.fullHeight : "",
        props.noMarginBottom ? styles.noBottomMargin : "",
    );

    const SectionHeading = () => {
        return (
            <div className={styles.heading}>
                <div className={styles.imageWrapper}>
                    <img src={props.stroke === "green" ? GreenStroke : BlueStroke} alt="Faded Brush Stroke" />
                </div>
                <div className="container">
                    <div className={styles.text}>
                        <h2>{props.heading}</h2>
                        {props.subHeading ? <p>{props.subHeading}</p> : null}
                    </div>
                </div>
            </div>
        )
    }


    return (
        <section className={sectionClass}>
            {props.heading ? <SectionHeading /> : null}
            {props.children}
        </section>
    )
}

export default Section