import React from "react";

import styles from "./Header.module.css";

const Header = function () {
    return (
        <header className={styles.siteHeader}>
            <h1 className={styles.siteTitle}>🔥Fireplace Palace</h1>
        </header>
    );
}

export default Header;