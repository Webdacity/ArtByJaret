import React from "react";
import { Link } from "gatsby";


// Styles, Fonts
import styles from "../styles/components/header.module.scss"


export default function Header() {
    return (
        <div>
            <header>
                <nav className="">
                    <Link to="/" className="">
                        ArtByJaret
                    </Link>
                    <div className="">
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
                </nav>
            </header>
        </div>
    )
}
