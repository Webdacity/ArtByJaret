import React from 'react';

import styles from "../styles/components/loader.module.scss"

const Loader = ({ text }) => {
    return (
        <div className="container">
            <div className={styles.loader}>
                <div className={styles.ellipsis}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p>{text}</p>
            </div>
        </div>

    )
}

export default Loader
