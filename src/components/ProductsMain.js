import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import ProductBlock from "./ProductBlock";
import Loader from "./Loader";


// Styles, Images
import styles from "../styles/components/products-main.module.scss";

// import CollectionsData from "../assets/data/collections.json";

const ProductsMain = () => {
    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState();

    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.API_URL}/products`
        })
            .then(result => {
                setProducts(result.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);



    // Rendering

    if (isLoading) {
        return <Loader text="Loading Items..." />
    }

    return (
        <div className="container">
            <div className={styles.grid}>
                {products.map((product, index) => (
                    product.home ? <ProductBlock {...product} key={index} /> : null
                ))}
            </div>
        </div>
    )
}

export default ProductsMain;