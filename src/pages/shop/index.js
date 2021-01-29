import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import ProductBlock from "../../components/ProductBlock";
import CollectionBlock from "../../components/CollectionsBlock";
import FixedBackground from "../../components/FixedBackground";



// Styles, Fonts, Images
import styles from "../../styles/pages/shop.module.scss";

const Shop = ({ data }) => {

    // State
    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState();
    const [assets, setAssets] = useState();

    // Hooks
    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.GATSBY_API_URL}/products/`
        })
            .then(result => {
                setProducts(result.data);
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
            })
    }, []);

    // Helpers

    const handleFilter = (index) => {

        // Active Category
        let allItems = document.getElementsByClassName(`${styles.listItem}`);
        for (let i = 0; i < allItems.length; i++) {
            allItems[i].classList.remove(`${styles.activeListItem}`);
        }
        let selectedItem = document.getElementsByClassName(`${styles.listItem}`)[index + 1];
        selectedItem.classList.add(`${styles.activeListItem}`);
        let activeCategory = selectedItem.innerHTML;

        // Filter
        let productGrid = document.querySelector(`.${styles.productGrid}`).children;
        for (let j = 0; j < productGrid.length; j++) {
            // Remove Old Filter
            productGrid[j].classList.remove(`${styles.hideFilter}`)
            let category = productGrid[j].getAttribute("data-category");
            if (category !== activeCategory) {
                productGrid[j].classList.add(`${styles.hideFilter}`)
            }
        }

    }

    const handleRemoveFilter = () => {
        let allItems = document.getElementsByClassName(`${styles.listItem}`);
        for (let i = 0; i < allItems.length; i++) {
            allItems[i].classList.remove(`${styles.activeListItem}`);
        }
        allItems[0].classList.add(`${styles.activeListItem}`);

        // Remove Filter
        let productGrid = document.querySelector(`.${styles.productGrid}`).children;
        for (let j = 0; j < productGrid.length; j++) {
            productGrid[j].classList.remove(`${styles.hideFilter}`)
        }
    }

    // Components
    const ShopCategories = () => {
        let categories = ["Original Art Work"];
        products.forEach(product => {
            if (!categories.includes(product.category)) {
                categories.unshift(product.category)
            }
        })

        return (
            <div className={styles.shopCategories}>
                <div className="container">
                    <ul className={styles.list}>
                        <li className={`${styles.listItem} ${styles.activeListItem}`} onClick={handleRemoveFilter}>All</li>
                        {categories.map((category, index) => (
                            <li className={styles.listItem} key={index} onClick={() => handleFilter(index)}>{category}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }



    // Rendering

    return (
        <Layout
            pageMeta={{
                title: "Shop | Art by Jaret",
                description: "Shop Jaret's original artworks, gifts and small-scale artwork.",
                canonical: "/shop",
            }}
            landing={{
                heading: "Shop",
                text: "Shop Jaret's original artworks, gifts and small-scale artwork.",
                reverse: true,
                colour: "blue",
                image: data.landingImage.childImageSharp.fluid
            }}
        >
            <FixedBackground image="shop1" />

            {isLoading ? <Loader text="Loading Items..." /> :
                <>
                    <ShopCategories />
                    <Section >
                        <div className="container">
                            <div className={styles.productGrid}>
                                {products.map((product, index) => (
                                    product.visibility ? <ProductBlock {...product} key={index} /> : null
                                ))}
                                {assets.map((asset, index) => (
                                    asset.availability ? <ProductBlock {...asset} asset={true} key={index} /> : null
                                ))}
                            </div>
                        </div>
                    </Section>
                </>
            }
        </Layout>
    )
}

export default Shop;


export const data = graphql`
  query {
    landingImage: file(relativePath: { eq: "other/2.jpg" }) {
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