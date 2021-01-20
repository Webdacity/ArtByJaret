import React from 'react';

// Components
import Layout from "../components/Layout";
import Section from "../components/Section";
import PictureGrid from "../components/PictureGrid";
import CollectionsMain from "../components/CollectionsMain";

// Styles, Fonts, Images
import styles from "../styles/pages/about.module.scss";

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
        text: "ArtByJaret is a collection of figure and portrait art meticulously created by Jaret Loggenberg. \n\nJaret Loggenberg's paintings reflect the natural warmth, emotions, and inner beauty of a true female. She tries to make her art unique by expressing herself with bold strokes and natural colours.",
        reverse: true,
        colour: "blue",
        image: data.landingImage.childImageSharp.fluid
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
          reverse={true}
          colour="blue"
        >
          <p>Jaret Loggenberg's paintings reflect the natural warmth, emotions, and inner beauty of a true female. She tries to make her art unique by expressing herself with bold strokes and natural colours. The reason, why oil on canvas is her preferred medium, is because it gives a very definite message and portrays a specific emotion, however it's open-ended in the sense that every viewer can make their own personal connection with the artwork. </p>

          <p>Jaret believes that it doesn't matter what your background is or where you come from, all women over the globe experience the same discrimination, stereotype which all women can relate to. As art is a universal language, with her works she can reach many women around the globe and hopefully inspires them to rise up. “It doesn't matter what has happened to us in the past, we should rise up and take back life. We are not victims, but victors.”</p>
        </PictureGrid>
      </Section>

      <Section
        fullWidth={true}
      >

        <PictureGrid
          gatsbyImage={data.thirdAboutImage.childImageSharp.fluid}
          colour="pink"
        >
          <p>Jaret Loggenberg is a registered South African Artist represented by The Traveling Art Gallery and Artsy.</p>

          <div className={styles.exhibitions}>
            <p><span>Exhibitions:</span></p>
            <ul>
              <li>The Stables, November 2019, Paarl Western Cape South Africa</li>
              <li>Against all Odds, July 2020, Berlin, Germany powered by the Travelling Art Gallery</li>
              <li>KunstSummor at KPM Quarter, August 2020, Berlin Germany  powered by the Travelling Art Gallery</li>
            </ul>

            <p>For more info regarding upcoming exhibitions, please contact  Barbara Lenhard at <a href="mailto:barbara@thetravellingartgallery.com">barbara@thetravellingartgallery.com</a></p>

          </div>
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
        fluid(maxWidth: 600, quality: 90)  {
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
        fluid(maxWidth: 600, quality: 90)  {
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
    thirdAboutImage: file(relativePath: { eq: "jaret/4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 90)  {
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
    landingImage: file(relativePath: { eq: "landing/about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 90)  {
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
