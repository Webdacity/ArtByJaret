import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive'

import styles from "../styles/components/brush-animation.module.scss";

import GreenStroke from "../assets/images/sections/green.svg";
import BlueStroke from "../assets/images/sections/blue.svg";

const BrushAnimation = (props) => {

    // Styles
    const wrapperStyle = () => {
        const style = {
            top: `${20 + randomNum(60)}%`,
            left: `${20 + randomNum(60)}%`,
            transform: `rotate(${randomNum(360)}deg)`,
        }
        return style
    }

    const randomNum = (number) => {
        return Math.floor(Math.random() * number)
    }

    // State
    const [imageStyles, setImageStyles] = useState([wrapperStyle()]);
    const [blueIsNext, setBlueIsNext] = useState(true);

    const isSmallerScreen = useMediaQuery({ query: '(max-width: 768px)' });

    const Image = ({ style }) => {
        return (
            <div className={styles.imageWrapper} style={style}>
                <img className={styles.image} src={blueIsNext ? BlueStroke : GreenStroke} alt="" />
                <div className={styles.imageCover}></div>
            </div>
        )
    }

    const addImage = () => {
        let newImages = []
        if (imageStyles.length <= 6) {
            console.log("new")
            newImages = [...imageStyles]
            newImages.push(wrapperStyle());
        } else {
            console.log("replace")
            newImages = [...imageStyles]
            newImages.shift();
            newImages.push(wrapperStyle());
        }
        setImageStyles(newImages)
        setBlueIsNext(!blueIsNext);
        console.log(imageStyles)
    }

    useEffect(() => {
        if (imageStyles.length < 5) {
            setTimeout(() => {
                addImage()
            }, 3000);
        }
    })

    useEffect(() => {
    })

    if (!isSmallerScreen) {
        return (
            <div className={`${styles.container} ${props.reverse ? styles.reverse : ""}`} id={styles.container}>
                {imageStyles.map((style, index) => (
                    <Image style={style} key={index} />
                ))}
            </div>
        )
    } else {
        return null
    }
}

export default BrushAnimation
