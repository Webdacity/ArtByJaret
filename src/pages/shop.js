import React from 'react';

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";

// Styles, Fonts, Images
import styles from "../styles/pages/shop.module.scss";

export default function shop() {
    return (
        <Layout
            pageMeta={{
                title: "Shop | Art by Jaret",
                description: "Shop Jaret's original artworks, gifts and small-scale artwork.",
                canonical: "/shop",
            }}
            landing={{
                heading: "Shop",
                text: "Shop Jaret's original artworks, gifts and small-scale artwork."
            }}
        >


        </Layout>
    )
}
