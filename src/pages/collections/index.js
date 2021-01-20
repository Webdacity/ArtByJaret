import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import CollectionGrid from "../../components/CollectionsGrid";
import Loader from "../../components/Loader";


// Styles, Fonts, Images
import styles from "../../styles/pages/collections.module.scss";

const Collections = ({ data }) => {

    const [isLoading, setLoading] = useState(true);
    const [collections, setCollections] = useState();
    const [assets, setAssets] = useState();

    useEffect(() => {
        axios({
            method: "GET",
            url: `${process.env.GATSBY_API_URL}/collections/`
        })
            .then(result => {
                setCollections(result.data);

                axios({
                    method: "GET",
                    url: `${process.env.GATSBY_API_URL}/assets/`
                })
                    .then(result => {
                        setAssets(result.data);
                        setLoading(false);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            });


    }, []);

    const getAssetsForCollection = (collection) => {
        const assetsForCollection = assets.filter(asset => asset.collectionType === collection.name);
        return assetsForCollection
    }

    return (
        <Layout
            pageMeta={{
                title: "Collections | Art by Jaret",
                description: "View the collection of Jaret's current & previous work.",
                canonical: "/collections",
            }}
            landing={{
                heading: "Collections",
                text: "View the collection of Jaret's current & previous work. \n\nJaret has always been in awe about the human body and anatomy and after many hours of research in the library, she discovered her love for human figures. As a figure artist, Jaret's subject matter is woman figures.",
                image: data.landingImage.childImageSharp.fluid
            }}
        >

            {isLoading ? <Loader text="Loading Collections..." /> :
                collections.map((collection, index) => (
                    getAssetsForCollection(collection).length > 0 ?
                        <Section
                            heading={collection.name}
                            stroke={index % 2 === 0 ? "green" : "blue"}
                            key={index}
                        >
                            <CollectionGrid assets={getAssetsForCollection(collection)} id={collection.name} />
                        </Section>
                        : null
                ))
            }
        </Layout>
    )
}

export default Collections;


export const data = graphql`
  query {
    landingImage: file(relativePath: { eq: "other/1.jpg" }) {
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