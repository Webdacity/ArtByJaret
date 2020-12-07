import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCart, getCartTotal } from "../utils/cartHelpers";



// Styles, Images, Data
import styles from "../styles/components/checkout.module.scss"

const Checkout = ({ products, shopSettings }) => {
    const [order, setOrder] = useState();

    const payfastDetails = {
        merchant_id: "10016549",
        merchant_key: "sxou1f0t4mr2c",
        url: `https://sandbox.payfast.co.za/eng/process`
    }

    // Helpers
    const getProduct = (item) => {
        let product = products.find(product => product.id === item.id);
        return product
    }

    const calcTotal = () => {
        return getCartTotal() + shopSettings.deliveryFee
    }

    const validateForm = () => {
        'use strict';
        let form = document.querySelector('#checkout-form')
        if (form.checkValidity() === false) {
            console.log("Validation Fail");
            // event.preventDefault();
            // event.stopPropagation();
            alert("Please ensure you have completed all the fields.")
            return false
        } else {
            console.log("Validation Success")
            return true
        }
    }

    // Handlers

    const orderConfirmation = () => {
        // Check Validation
        if (!validateForm()) {
            return
        }

        let order = {}
        let formData = new FormData(document.querySelector('#checkout-form'));
        formData.forEach((value, key) => order[key] = value);
        order.cart_items = getCart()
        order.amount_gross = calcTotal()

        // Send Order
        axios({
            method: "post",
            url: `${process.env.API_URL}/orders/confirmation`,
            data: order
        })
            .then(result => {
                initPayment(order, result.data.order_number)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const initPayment = (order, order_number) => {
        // Set Amount + OrderNumber
        document.querySelector("#checkout-form input[name='amount']").value = order.amount_gross;
        document.querySelector("#checkout-form input[name='custom_str1']").value = order_number;
        document.querySelector("#checkout-form input[name='notify_url']").value = "https://artbyjaret.herokuapp.com/orders/";
        document.querySelector("#checkout-form").submit()
    }

    // Components
    const CartItem = (cartItem) => {
        let product = getProduct(cartItem);
        return (
            <div className={styles.cartItem}>
                <p>{product.name}</p>
                <p>{cartItem.price}</p>
                <p>{cartItem.quantity}</p>
            </div>
        )
    }

    return (
        <div className={styles.grid}>
            <div className={styles.form}>
                <form action={payfastDetails.url} method="POST" id="checkout-form">
                    <div className={styles.row}>
                        <div>
                            <input type="text" name="name_first" placeholder="First Name" required />
                        </div>
                        <div>
                            <input type="text" name="name_last" placeholder="Last Name" required />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div>
                            <input type="email" name="email_address" placeholder="Email Address" required />
                        </div>
                        <div>
                            <input type="tel" name="cell_number" placeholder="Phone Number" required />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <textarea type="text" name="delivery_address" placeholder="Delivery Address"></textarea>
                    </div>
                    <div className={styles.row}>
                        <div>
                            <input type="text" name="city" placeholder="City" required />
                        </div>
                        <div>
                            <input type="text" name="postcode" placeholder="Post Code" required />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <textarea type="text" name="delivery_notes" placeholder="Delivery Notes"></textarea>
                    </div>
                    <input type="hidden" name="merchant_id" value={payfastDetails.merchant_id} />
                    <input type="hidden" name="merchant_key" value={payfastDetails.merchant_key} />
                    <input type="hidden" name="return_url" value="http://www.artbyjaret.co.za/cart/success" />
                    <input type="hidden" name="cancel_url" value="http://www.artbyjaret.co.za/cart" />
                    <input type="hidden" name="notify_url" value="" />
                    <input type="hidden" name="item_name" value="Art by Jaret Cart" />
                    <input type="hidden" name="amount" value="" />
                    <input type="hidden" name="custom_str1" value="" />
                    <input type="hidden" name="custom_str2" value="" />
                </form>
            </div>

            <div className={styles.summary}>
                <h2>Order Summary</h2>
                <div>
                    <p>Subtotal</p>
                    <h6>R {getCartTotal()}</h6>
                </div>
                <div>
                    <p>Shipping</p>
                    <h6>R {shopSettings.deliveryFee}</h6>
                </div>
                <div className={styles.total}>
                    <p>Total</p>
                    <h6>R {calcTotal()}</h6>
                </div>
                <button className="button" type="submit" onClick={() => orderConfirmation()}>
                    <a>Pay Now</a>
                </ button>
            </div>
        </div>
    )
}

export default Checkout
