import React, { useEffect } from 'react';
import { clearCart } from "../../utils/cartHelpers";

// Components
import Layout from "../../components/Layout";
import Section from "../../components/Section";

import styles from "../../styles/pages/cart-success.module.scss"

const Success = () => {

    useEffect(() => {
        clearCart()
    }, []);


    return (
        <Layout
            pageMeta={{
                title: "Success | Art by Jaret",
                robots: "noindex, nofollow"
            }}
        >
            <Section
                heading="Success"
                stroke="blue"
            >
                <div className="container">
                    <div className={styles.success}>
                        <h1>Transaction Successful</h1>
                        <p>Thank you for shopping at Art by Jaret!</p>
                        <p>Check your inbox (and maybe your spam inbox) for your order &amp; payment email confirmation.</p>
                    </div>
                </div>
            </Section>
        </Layout>
    )
}

export default Success
