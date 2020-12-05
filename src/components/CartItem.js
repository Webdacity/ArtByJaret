import React, { useState, useEffect } from "react";
import { updateCart, removeFromCart } from "../utils/cartHelpers"

// Styles
import styles from "../styles/components/cart-item.module.scss"

const CartItem = (props) => {
    const [isLoading, setLoading] = useState(true);
    const [product, setProduct] = useState(props.product);
    const [quantity, setQuantity] = useState(props.quantity);
    const [total, setTotal] = useState(product.price * quantity);


    const handleQuantityUpdate = (value) => {
        console.log(value);
        setQuantity(value);
        setTotal(product.price * value)
        updateCart(product, value);
        console.log(product)
    }

    const handleItemRemove = () => {
        removeFromCart(product);
        setProduct()
    }

    return (
        <div className={styles.item}>
            <i className={`${styles.remove} material-icons`} onClick={() => handleItemRemove()}>close</i>
            <div className={styles.image}>
                <img src={product.thumbnail} alt="" />
            </div>
            <div className={styles.grid}>
                <div className={`${styles.row} ${styles.headings}`}>
                    <p>Name</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p>Total</p>
                </div>
                <div className={`${styles.row} ${styles.values}`}>
                    <p>{product.name}</p>
                    <input min={1} type="number" name="quantity" value={quantity} onChange={e => handleQuantityUpdate(e.target.value)} />
                    <p>{product.price}</p>
                    <p className={styles.total}>{total}</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem
