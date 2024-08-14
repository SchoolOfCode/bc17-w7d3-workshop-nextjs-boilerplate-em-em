import React from "react";
import styles from "./Card.module.css";

const Card = function({image, image_alt, heading, text}) {
    return(
        <>
            <div className={styles.card}>
                <figure className={styles.card_figure}>
                    <img className={styles.card_img} src={image} alt={image_alt} />
                </figure>
                <h3 className={styles.card_h3}>{heading}</h3>
                <p className={styles.card_p}>{text}</p>
            </div>
        </>
    );
};

export default Card;