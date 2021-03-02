import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCart } from "../../utils/cartHelpers";


// Components
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import CartItem from "../../components/CartItem";
import Loader from "../../components/Loader";
import Checkout from "../../components/Checkout";

import styles from "../../styles/pages/cart.module.scss"

const Cart = () => {
    // State
    const [isLoading, setLoading] = useState(true);
    const [products, setProducts] = useState();
    const [cart, setCart] = useState(getCart());
    const [shopSettings, setShopSettings] = useState();
    const [showCart, setShowCart] = useState(true);
    const [showCheckout, setShowCheckout] = useState(false);

    // Hooks
    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.GATSBY_API_URL}/products/`
        })
            .then(result => {
                console.log(result)
                setProducts(result.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);

    useEffect(() => {
        axios({
            method: "get",
            url: `${process.env.GATSBY_API_URL}/shopSettings/`
        })
            .then(result => {
                setShopSettings(result.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);


    // Helpers
    const getProduct = (item) => {
        let product = products.find(product => product.id === item.id);
        return product
    }

    // Handlers
    const handleCartChange = (() => {
        setCart(getCart())
    })

    const handleCheckoutShow = () => {
        // Check Quants
        setShowCart(false)
        setShowCheckout(true)
        handleCartChange();
    }

    const handleCartShow = () => {
        setShowCheckout(false)
        setShowCart(true)
    }

    // Components
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
            <div>
                <div className={styles.headings}>
                    <p>Name</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p>Total</p>
                </div>
                {
                    cart.map((item, index) => (
                        // Get Product
                        item ? <CartItem product={getProduct(item)} quantity={item.quantity} key={index} handleCartChange={() => handleCartChange()} /> : null
                    ))
                }
            </div>
        )
    }

    return (
        <Layout
            pageMeta={{
                title: "Cart | Art by Jaret",
                robots: "noindex, nofollow"
            }}
        >
            <Section
                heading={showCheckout ? "Checkout" : "Your Cart"}
                stroke="green"
                fullHeight={true}

            >
                <div className="container">
                    {showCart ? <div className={styles.cart}>
                        {isLoading ?
                            <Loader text="Loading Cart..." />
                            : <CartGrid />
                        }
                    </div> : null}
                    {showCheckout ? <Checkout products={products} shopSettings={shopSettings} /> : null}
                    <div className={styles.cartOptions}>
                        {showCart && cart ?
                            <button className="button" onClick={() => handleCheckoutShow()}>
                                <a>Continue to Checkout</a>
                            </ button>
                            : null}
                        {showCheckout ? <button className="button" onClick={() => handleCartShow()}>
                            <a>Back to Cart</a>
                        </ button> : null}
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default Cart
