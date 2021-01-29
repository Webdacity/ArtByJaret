import React from "react";


// Components
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import CollectionGrid from "../../components/CollectionsGrid";
import FixedBackground from "../../components/FixedBackground";


const Collections = ({ data }) => {

  return (
    <Layout
      pageMeta={{
        title: "Collections | Art by Jaret",
        description: "A Collection of Jaret's current & previous work.",
        canonical: "/collections",
      }}
      landing={{
        heading: "Collections",
        text: "View the collection of Jaret's current & previous work. \n\nJaret has always been in awe about the human body and anatomy and after many hours of research in the library, she discovered her love for human figures. As a figure artist, Jaret's subject matter is woman figures.",
        image: data.landingImage.childImageSharp.fluid
      }}
    >

      <FixedBackground image="collections2" />

      <Section>
        <CollectionGrid />
      </Section>
    </Layout>
  )
}

export default Collections;


export const data = graphql`
  query {
    landingImage: file(relativePath: { eq: "other/1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500)  {
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