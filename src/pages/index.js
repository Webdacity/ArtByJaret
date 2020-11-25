import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";

// Styles, Fonts, Images
import styles from "../styles/pages/index.module.scss";

export default function Home() {
  return (
    <Layout
      pageMeta={{
        title: "Art by Jaret",
        description: "ArtByJaret is a collection of figure and portraits art meticulously created by Jaret Loggenberg.",
        canonical: "/"
      }}
      pageName="home"
    >
    </Layout>
  )
}
