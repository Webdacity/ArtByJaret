import React from 'react';
import { Link } from "gatsby";
import { convertImage } from "../utils/helpers"


// Styles, Images, Data
import styles from "../styles/components/collections-block.module.scss";

// Animations
import Fade from 'react-reveal/Fade';


const CollectionBlock = (props) => {

    const getAvailability = () => {

        if (props.availability) {
            return <p>Available</p>
        }
        else if (!props.availability && props.description) {
            return <p>Sold</p>
        }
        else {
            return null
        }
    }

    return (
        <Link className={styles.block} to={props.to}>
            <Fade cascade>
                <div className={styles.imageWrapper}>
                    <img src={convertImage(props.image, 300)} alt={`${props.name} collection of Art by Jaret`} />
                </div>
                <div className={styles.text}>
                    <h5>{props.name}</h5>
                    {getAvailability()}
                </div>
            </Fade>
        </Link>
    )
}

export default CollectionBlock;
