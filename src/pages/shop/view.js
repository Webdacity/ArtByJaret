import React, { useState, useEffect } from "react";
import axios from "axios";
import { updateCart } from "../../utils/cartHelpers"

// Components
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import PictureGrid from "../../components/PictureGrid";
import Loader from "../../components/Loader"


// Styles
import styles from "../../styles/pages/shop-view.module.scss"

const View = ({ location }) => {
    const [isLoading, setLoading] = useState(true);
    const [product, setProduct] = useState();
    const [quantity, setQuantity] = useState(1)


    // Get Product ID or Redirect
    let productID = location.search;
    if (location.search) {
        productID = productID.replace("?", '')
    } else {
        window.location.replace("/collections")
    }

    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.API_URL}/products/${productID}`
        })
            .then(result => {
                setProduct(result.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    // Rendering

    if (isLoading) {
        return <Loader text="Loading Artwork..." />
    }

    return (
        <Layout
            pageMeta={{
                title: `${product.name} | Art by Jaret`,
                description: `${product.description}`,
                canonical: `/collections/view?${productID}`,
            }}
        >
            <Section
                fullWidth={true}
                heading={product.category}
                stroke="blue"
                noMarginBottom={true}
            >
                <PictureGrid collection={true} image={product.thumbnail}>
                    <div className={styles.grid}>
                        <h1 className={styles.name}>{product.name}</h1>
                        <p className={styles.description}>{product.description}</p>
                        <p className={styles.price}>R {product.price}</p>
                        <div className={styles.metaInfo}>
                            <p>
                                <span>Date:</span>
                                {product.date}
                            </p>
                            <p>
                                <span>Medium:</span>
                                {product.medium}
                            </p>
                            <p>
                                <span>Size:</span>
                                {product.size}
                            </p>
                        </div>
                        <div className={styles.options}>
                            <div className={styles.quantity}>
                                <label htmlFor="quantity">Quantity</label>
                                <input min={1} type="number" name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
                            </div>
                            <button className="button" onClick={() => updateCart(product, quantity)}>
                                <a>Add To Cart</a>
                            </button>
                        </div>
                    </div>
                </PictureGrid>
            </Section>
        </Layout>
    )
}

export default View