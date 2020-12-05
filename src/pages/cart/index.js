import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCart, clearCart, getCartTotal } from "../../utils/cartHelpers";


// Components
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import CartItem from "../../components/CartItem";
import Loader from "../../components/Loader";

import styles from "../../styles/pages/cart.module.scss"

const Cart = () => {
    // State
    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState();
    const [total, setTotal] = useState()


    const cart = getCart();
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

    const getProduct = (item) => {
        let product = products.find(product => product.id === item.id);
        return product
    }

    const CartGrid = () => {

        if (cart === null) {
            return (
                <div className={styles.emptyCart}>
                    <h2>Your cart is empty </h2>
                </div>
            )
        } else if (cart.length < 1) {
            return (
                <div className={styles.emptyCart}>
                    <h2>Your cart is empty </h2>
                </div>
            )
        }
        return (
            cart.map((item, index) => (
                // Get Product
                <CartItem product={getProduct(item)} quantity={item.quantity} key={index} />
            ))
        )
    }

    return (
        <Layout
            pageMeta={{
                title: "Cart| Art by Jaret",
                robots: "noindex, nofollow"
            }}
        >
            <Section
                heading="Your Cart"
                stroke="green"
            >
                <div className={styles.cart}>
                    <div className="container">
                        {isLoading ?
                            <Loader text="Loading Cart..." />
                            : <CartGrid />
                        }
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default Cart
