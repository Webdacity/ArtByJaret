import React from "react";
import Layout from "../components/Layout";

const NotFound = () => {
    return (
        <Layout
            pageMeta={{
                title: "Page not Found | Art by Jaret",
                description: "Page not Found",
                robots: "noindex, nofollow"
            }}
        >
            <h1> Page not Found </h1>
        </Layout>
    )
}

export default NotFound
