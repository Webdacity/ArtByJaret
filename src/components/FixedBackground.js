import React from 'react';

// Styles
import styles from "../styles/components/fixed-background.module.scss"

// Images
import about1 from "../assets/images/backgrounds/about1.jpg";
import about2 from "../assets/images/backgrounds/about2.jpg";
import collections2 from "../assets/images/backgrounds/collections2.jpg";
import shop1 from "../assets/images/backgrounds/shop1.jpg";


const FixedBackground = (props) => {

  const images = {
    about1: about1,
    about2: about2,
    collections2: collections2,
    shop1: shop1,
  }

  return (
    <div className={styles.background} style={{ backgroundImage: `url(${images[props.image]})` }}></div>
  )
}

export default FixedBackground
