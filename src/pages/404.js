import React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby"

// Styles
import styles from "../styles/pages/404.module.scss"

const NotFound = () => {
    return (
        <Layout
            pageMeta={{
                title: "Page Not Found | Art by Jaret",
                description: "Page not Found",
                robots: "noindex, nofollow"
            }}
        >
            <div className={styles.notFound}>
                <div className="container">
                    <h1> Page Not Found </h1>
                    <p>The page your looking for does not exist.</p>
                    <button className="button">
                        <Link to="/" >Go to Home Page</Link>
                    </button>
                </div>
            </div>
        </Layout >
    )
}

export default NotFound
