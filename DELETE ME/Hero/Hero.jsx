import React from "react";

import styles from "./Hero.module.css";

const Hero = function() {
    return (
        <>
            <section className={styles.hero}>
                <figure>
                    <img className={styles.hero_img} src="images/hero-mobile.png" alt="Cosy, warm fireplace cartoon" />
                </figure>
                <div className={styles.hero_text}>
                    <h2 className={styles.hero_header}>Discover the<br /> 
                    Perfect Fireplace...</h2>
                    <p className={styles.book_consultation}>
                        Book consultation: 
                        <span className={styles.book_number}>0121 345 6789</span>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Hero;