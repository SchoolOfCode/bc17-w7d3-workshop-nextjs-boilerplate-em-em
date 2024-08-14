'use client';

import React from "react";
import { useState } from "react";

import styles from "./Header.module.css";



const Header = function () {

    const [menuStatus, setMenuStatus] = useState(false);

    function handleClick (){
        setMenuStatus(!menuStatus);
        console.log(menuStatus);
    }

    return (
        <header className={styles.siteHeader}>
            <h1 className={styles.siteTitle}>🔥Fireplace Palace</h1>
            <img onClick = {handleClick} className={styles.burgerMenu} src="images/menu-open-button.png" alt="burger menu button" />
            {menuStatus && <div className = "menu">hello guys</div>}
        </header>
    );
}

export default Header;