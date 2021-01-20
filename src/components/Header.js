import React from "react";
import { Link } from "gatsby";

// Styles, Fonts
import styles from "../styles/components/header.module.scss";

// Animation
import Fade from 'react-reveal/Fade';

const Header = () => {

    const toggleNav = () => {
        let nav = document.getElementsByClassName(styles.mobileLinks)[0];
        if (nav.classList.contains(styles.navbarOpen)) {
            nav.classList.remove(styles.navbarOpen);
        } else {
            nav.classList.add(styles.navbarOpen);
        }
    }

    return (
        <header>
            <Fade top>
                <nav className={styles.navbar}>
                    <Link to="/" className={styles.logo}>
                        ArtByJaret
                    </Link>
                    <div className={styles.links}>
                        <Link to="/" activeClassName={styles.activeLink}>
                            Home
                        </Link>
                        <Link to="/about" activeClassName={styles.activeLink}>
                            About
                        </Link>
                        <Link to="/collections" activeClassName={styles.activeLink}>
                            Collections
                        </Link>
                        <Link to="/shop" activeClassName={styles.activeLink}>
                            Shop
                        </Link>
                        <Link to="/contact" activeClassName={styles.activeLink}>
                            Contact
                        </Link>
                        <Link to="/cart" activeClassName={styles.activeLink}>
                            <i className="icon-shopping-cart"></i>
                        </Link>
                    </div>
                </nav>
            </Fade>
            <nav className={styles.mobileNavbar}>
                <Link to="/" className={styles.logo}>
                    ArtByJaret
                    </Link>
                <i className="material-icons" onClick={toggleNav}>menu</i>
                <div className={styles.mobileLinks}>
                    <i className={`${styles.close} material-icons`} onClick={toggleNav}>close</i>
                    <Link to="/" activeClassName={styles.activeLink} onClick={toggleNav}>
                        Home
                        </Link>
                    <Link to="/about" activeClassName={styles.activeLink} onClick={toggleNav}>
                        About
                        </Link>
                    <Link to="/collections" activeClassName={styles.activeLink} onClick={toggleNav}>
                        Collections
                        </Link>
                    <Link to="/shop" activeClassName={styles.activeLink} onClick={toggleNav}>
                        Shop
                        </Link>
                    <Link to="/contact" activeClassName={styles.activeLink} onClick={toggleNav}>
                        Contact
                        </Link>
                    <Link to="/cart" activeClassName={styles.activeLink} className={styles.cartLink} onClick={toggleNav}>
                        <span>cart</span><i className="icon-shopping-cart"></i>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
