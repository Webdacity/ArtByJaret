import React from 'react';

// Components
import Loader from "./Loader";
import Transition from '../components/Transition';
import Fade from 'react-reveal/Fade';


// Images & Styles
import styles from "../styles/components/page-loader.module.scss";
import Logo from "../assets/images/logos/logo-black.png";

const PageLoader = () => {
    return (
        <div className={styles.pageLoader} id="page-loader">
            <Loader />
        </div>
    )
}

export default PageLoader
