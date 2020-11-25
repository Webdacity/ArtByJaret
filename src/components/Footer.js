import React from 'react';
import { Link } from "gatsby";


// Styles, Fonts, Images
import styles from "../styles/components/footer.module.scss";
import FooterLogo from "../assets/images/logos/footer-logo.png";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <Link to="/" className={styles.logo}>
                    <img src={FooterLogo} alt="Art By Jaret Logo White" />
                </Link>
                <div className={styles.links}>
                    <Link to="/" className="">
                        Home
                </Link>
                    <Link to="/about" className="">
                        About
                </Link>
                    <Link to="/collections" className="">
                        Collections
                </Link>
                    <Link to="/shop" className="">
                        Shop
                </Link>
                    <Link to="/contact" className="">
                        Contact
                </Link>
                </div>
                <div className={styles.social}>
                    <a href="">
                        <i className="icon-instagram"></i>
                    </a>
                    <a href="">
                        <i className="icon-facebook"></i>
                    </a>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.copy}>
                <p>Copyright © 2020 - Art by Jaret</p>
                <p>Design &amp; Development by <a href="https://webdacity.dev">Webdacity</a></p>
            </div>
        </footer>
    )
}



