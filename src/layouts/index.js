import React from "react";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";
import Transition from '../components/Transition'


// Styles & Fonts
import "typeface-noto-sans-sc";
import "../styles/typography.scss";
import "../styles/global.scss";
import "../assets/fonts/icons/icons.css";
import 'material-icons/iconfont/material-icons.scss';

// Icons

const Layout = ({ children, location }) => {
    return (
        <>
            <Header />
            <Transition location={location}>
                {children}
            </Transition>
            <Footer />
        </>
    )
}

export default Layout