import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import Layout from "../../components/Layout";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import ProductBlock from "../../components/ProductBlock"

// Styles, Fonts, Images
import styles from "../../styles/pages/shop.module.scss";

const Shop = () => {

    // State
    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState();

    // Hooks
    useEffect(() => {
        axios({
            method: "get",
            url: `http://localhost:3000/products`
        })
            .then(result => {
                setProducts(result.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    // Inner Components
    const ShopCategories = () => {
        let categories = [];
        products.forEach(product => {
            if (!categories.includes(product.category)) {
                categories.push(product.category)
            }
        })

        return (
            <div className={styles.shopCategories}>
                <div className="container">
                    <ul className={styles.list}>
                        <li className={`${styles.listItem} ${styles.activeListItem}`}>All</li>
                        {categories.map(category => (
                            <li className={styles.listItem}>{category}</li>
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
                text: "Shop Jaret's original artworks, gifts and small-scale artwork."
            }}
        >

            {isLoading ? <Loader text="Loading Items..." /> :
                <>
                    <ShopCategories />
                    <Section >
                        <div className="container">
                            <div className={styles.productGrid}>
                                {products.map((product, index) => (
                                    product.visibility ? <ProductBlock {...product} key={index} /> : null
                                ))}
                            </div>
                        </div>
                    </Section>
                </>
            }
        </Layout>
    )
}

export default Shop