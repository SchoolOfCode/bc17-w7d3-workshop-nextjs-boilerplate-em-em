import React from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

import heroMobile from "../../../public/images/hero-mobile.png"

const Hero = function() {
    return (
        <>
            <section className={styles.hero}>
                <figure>
                    <Image className={styles.hero_img} src={heroMobile} alt="Cosy, warm fireplace cartoon" width={704} height={636} priority />
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