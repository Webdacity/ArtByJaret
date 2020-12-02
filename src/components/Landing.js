import React from 'react';

// Styles, IMages
import styles from "../styles/components/landing.module.scss"

const Landing = (props) => {
    return (
        <div className={styles.landing}>
            <div className={styles.heading}>
                <h1>{props.heading}</h1>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Landing

