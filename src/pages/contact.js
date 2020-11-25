import React from 'react';

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";
import PictureGrid from "../components/PictureGrid";

// Styles, Fonts, Images
import styles from "../styles/pages/contact.module.scss";

export default function contact({ data }) {
  return (
    <Layout
      pageMeta={{
        title: "Contact | Art by Jaret",
        description: "ArtByJaret is a collection of figure and portraits art meticulously created by Jaret Loggenberg.",
        canonical: "/",
      }}
    >

      {/* Contact Section */}
      <Section
        fullWidth={true}
      >
        <PictureGrid image={data.contactImage.childImageSharp.fluid}>

        </PictureGrid>
      </Section>

    </Layout>
  )
}

export const data = graphql`
  query {
    contactImage: file(relativePath: { eq: "jaret/4.jpg" }) {
      childImageSharp {
        fluid  {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcWebp
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
