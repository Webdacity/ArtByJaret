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
        </header>
    )
}

export default Header
