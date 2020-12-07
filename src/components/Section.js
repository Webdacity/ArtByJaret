import React from 'react';
import classNames from "classnames";

// Styles, Images, Fonts
import styles from "../styles/components/section.module.scss"
import GreenStroke from "../assets/images/sections/green-right.svg";
import BlueStroke from "../assets/images/sections/blue-left.svg";

const Section = (props) => {
    let sectionClass = classNames(
        styles.section,
        props.fullWidth ? styles.fullWidth : "",
        props.noMarginBottom ? styles.noBottomMargin : ""
    );

    const SectionHeading = () => {
        return (
            <div className={styles.heading}>
                <img src={props.stroke === "green" ? GreenStroke : BlueStroke} alt="Faded Brush Stroke" />
                <div className="container">
                    <h2>{props.heading}</h2>
                    {props.subHeading ? <p>{props.subHeading}</p> : null}
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