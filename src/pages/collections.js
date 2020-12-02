import React from 'react';

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";

// Styles, Fonts, Images
import styles from "../styles/pages/collections.module.scss";

export default function collections() {
    return (
        <Layout
            pageMeta={{
                title: "Collections | Art by Jaret",
                description: "View the collection of Jaret’s current & previous work.",
                canonical: "/collections",
            }}
            landing={{
                heading: "Collections",
                text: "View the collection of Jaret’s current & previous work."
            }}
        >


        </Layout>
    )
}
