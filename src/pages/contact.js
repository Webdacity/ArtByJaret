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
        description: "Get in touch with Jaret to commission artwork, a creative project, or for any other queries you might have regarding her work.",
        canonical: "/contact",
      }}
    >

      {/* Contact Section */}
      <PictureGrid gatsbyImage={data.contactImage.childImageSharp.fluid} fullHeight={true}>
        <div className={styles.contactDetails}>
          <h4>Get in Touch</h4>
          <div className={styles.contactGrid}>
            <div>
              <h6>Email:</h6>
              <a href="mailto:hello@artbyjaret.co.za">hello@artbyjaret.co.za</a>
            </div>
            <div>
              <h6>Phone:</h6>
              <a href="tel:+27647581714">+27 64 758 1714</a>
            </div>
          </div>
          <h4>
            Send a Message
          </h4>
          <form name="contact" method="post" data-netlify="true" className={styles.form}>
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="name" required placeholder="Name" />
            <input type="email" name="email" required placeholder="Email" />
            <textarea name="message" placeholder="Message" required></textarea>
            <button type="submit" className="button">
              <a>Send</a>
            </button>
          </form>
        </div>
      </PictureGrid>
    </Layout>
  )
}

export const data = graphql`
  query {
    contactImage: file(relativePath: { eq: "jaret/5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600)  {
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
