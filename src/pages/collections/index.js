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
            method: "get",
            url: `${process.env.API_URL}/collections`
        })
            .then(result => {
                setCollections(result.data);

                axios({
                    method: "get",
                    url: `${process.env.API_URL}/assets`
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
            })
    }, []);

    const getLink = (name) => {
        let link = `/collections#${name.replace(/ /g, "")}`
        return link
    }

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
                text: "View the collection of Jaret's current & previous work.",
                image: data.landingImage.childImageSharp.fluid
            }}
        >

            {isLoading ? <Loader text="Loading Collections..." /> :
                collections.map((collection, index) => (
                    <Section
                        heading={collection.name}
                        stroke={index % 2 === 0 ? "green" : "blue"}
                        key={index}
                    >
                        <CollectionGrid assets={getAssetsForCollection(collection)} id={collection.name} />
                    </Section>
                ))
            }
        </Layout>
    )
}

export default Collections;


export const data = graphql`
  query {
    landingImage: file(relativePath: { eq: "landing/collections.jpg" }) {
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