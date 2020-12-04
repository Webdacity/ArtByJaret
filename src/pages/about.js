import React from 'react';

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";
import PictureGrid from "../components/PictureGrid";
import CollectionsMain from "../components/CollectionsMain";

// Styles, Fonts, Images
import styles from "../styles/pages/contact.module.scss";

export default function about({ data }) {
  return (
    <Layout
      pageMeta={{
        title: "About | Art by Jaret",
        description: "ArtByJaret is a collection of figure and portraits art meticulously created by Jaret Loggenberg.",
        canonical: "/about",
      }}
      landing={{
        heading: "About",
        text: "ArtByJaret is a collection of figure and portraits art meticulously created by Jaret Loggenberg."
      }}
    >


      <Section
        heading="Jaret Loggenberg"
        stroke="blue"
        fullWidth={true}
      >
        <PictureGrid gatsbyImage={data.firstAboutImage.childImageSharp.fluid}
          colour="pink"
        >
          <p>Born 1994 and growing up on a farm, outside Parys in South Africa, Jaret Loggenberg discovered her passion for art and culture at the age of 10. In 2010 she sold her first painting which enabled her to attend an art tour in Europe. After she matriculated her father advised her to rather study a BCom degree as he felt that she won't make a living from art.</p>

          <p>Jaret has always been in awe about the human body and anatomy and after many hours of research in the library, she discovered her love for human figures. As a figure artist, Jaret's subject matter is woman figures.</p>

          <p>For her works, she makes use of a stroke technique which she developed herself during the years of painting. She prefers oil as medium of choice and she strives to improve her craft and therefore still attends various art workshops. “It's not about being the best – It's about being better than you were yesterday.”</p>
        </PictureGrid>

      </Section>

      <Section
        fullWidth={true}
      >

        <PictureGrid
          gatsbyImage={data.secondAboutImage.childImageSharp.fluid}
          reverse="true"
          colour="blue"
        >
          <p>Born 1994 and growing up on a farm, outside Parys in South Africa, Jaret Loggenberg discovered her passion for art and culture at the age of 10. In 2010 she sold her first painting which enabled her to attend an art tour in Europe. After she matriculated her father advised her to rather study a BCom degree as he felt that she won't make a living from art.</p>

          <p>Jaret has always been in awe about the human body and anatomy and after many hours of research in the library, she discovered her love for human figures. As a figure artist, Jaret's subject matter is woman figures.</p>

          <p>For her works, she makes use of a stroke technique which she developed herself during the years of painting. She prefers oil as medium of choice and she strives to improve her craft and therefore still attends various art workshops. “It's not about being the best – It's about being better than you were yesterday.”</p>
        </PictureGrid>
      </Section>

      <Section
        heading="Collections"
        subHeading="View the collection of Jaret's current &amp; previous work."
        stroke="green"
      >
        <CollectionsMain />
      </Section>

    </Layout>
  )
}

export const data = graphql`
  query {
    firstAboutImage: file(relativePath: { eq: "jaret/3.jpg" }) {
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
    secondAboutImage: file(relativePath: { eq: "jaret/2.jpg" }) {
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
