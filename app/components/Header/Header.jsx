import React from "react";

import styles from "./Header.module.css";

const Header = function () {
    return (
        <header className={styles.siteHeader}>
            <h1 className={styles.siteTitle}>🔥Fireplace Palace</h1>
            <button><img className={styles.burgerMenu} src="images/menu-open-button.png" alt="burger menu button" /></button>
        </header>
    );
}

export default Header;