import React from 'react';

// Components
import PictureGrid from "../components/PictureGrid";

// Styles, IMages
import styles from "../styles/components/landing.module.scss"

const Landing = (props) => {

    return (
        // <div className={styles.landing}>
        //     <div className={styles.heading}>
        //         <h1>{props.heading}</h1>
        //         <p>{props.text}</p>
        //     </div>
        // </div>

        <div className={styles.landing}>
            <PictureGrid
                gatsbyImage={props.image}
                landing={true}
                reverse={props.reverse}
                colour={props.colour}
            >
                <h1> {props.heading} </h1>
                <p>{props.text}</p>
            </PictureGrid>
        </div>
    )
}

export default Landing;