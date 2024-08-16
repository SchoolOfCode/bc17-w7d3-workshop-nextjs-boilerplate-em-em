import React from "react";
import styles from "./Card.module.css";

import Image from "next/image";


const Card = function({image, image_alt, heading, text}) {
    return(
        <li className={styles.card}>
            <figure className={styles.card_figure}>
                <Image className={styles.card_img} src={image} alt={image_alt} width={360} height={360} />
            </figure>
            <h3 className={styles.card_h3}>{heading}</h3>
            <p className={styles.card_p}>{text}</p>
        </li>
    );
};

export default Card;