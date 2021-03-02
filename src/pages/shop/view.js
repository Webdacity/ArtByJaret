import React, { useState, useEffect } from "react";
import axios from "axios";
import { updateCart } from "../../utils/cartHelpers";


// Components
import Layout from "../../components/Layout";
import PictureGrid from "../../components/PictureGrid";
import PageLoader from "../../components/PageLoader"


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
        if (typeof window !== 'undefined') {
            window.location.replace("/collections")

        }
    }

    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.GATSBY_API_URL}/products/${productID}`
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
        return <PageLoader />
    }

    return (
        <Layout
            pageMeta={{
                title: `${product.name} | Art by Jaret`,
                description: `${product.description}`,
                canonical: `/collections/view?${productID}`,
            }}
        >
            <PictureGrid collection={true} images={product.images} bottomMargin={true} fullHeight={true} arrows={true}>
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
        </Layout>
    )
}

export default View
