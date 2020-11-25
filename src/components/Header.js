import React from "react";
import { Link } from "gatsby";


// Styles, Fonts
import styles from "../styles/components/header.module.scss"

const Header = () => {
    return (
        <header>
            <nav className={styles.navbar}>
                <Link to="/" className={styles.logo}>
                    ArtByJaret
                    </Link>
                <div className={styles.links}>
                    <Link to="/">
                        Home
                        </Link>
                    <Link to="/about">
                        About
                        </Link>
                    <Link to="/collections">
                        Collections
                        </Link>
                    <Link to="/shop">
                        Shop
                        </Link>
                    <Link to="/contact">
                        Contact
                        </Link>
                    <Link to="cart">
                        <i className="icon-shopping-cart"></i>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
