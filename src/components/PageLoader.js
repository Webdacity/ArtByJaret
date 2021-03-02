import React from 'react';

// Components
import Loader from "./Loader";


// Images & Styles
import styles from "../styles/components/page-loader.module.scss";

const PageLoader = () => {
    return (
        <div className={styles.pageLoader} id="page-loader">
            <Loader />
        </div>
    )
}

export default PageLoader
