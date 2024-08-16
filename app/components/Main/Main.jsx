import React from "react";
import Hero from "../Hero/Hero.jsx"
import HowItWorks from "../How_it_works/HowItWorks.jsx";
import Trusted from "../Trusted/Trusted.jsx"

import styles from "./Main.module.css";

const Main = function() {
    return (
        <>
            <main className={styles.site_main}>
                <Hero />
                <Trusted />
                <HowItWorks />
            </main>
        </>
    );
}

export default Main;