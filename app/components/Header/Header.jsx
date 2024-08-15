'use client';

import React from "react";
import { useState, useEffect } from "react";

import styles from "./Header.module.css";
import Link from "next/link";


const Header = function () {

    const [menuStatus, setMenuStatus] = useState(false);

    const [pathName, setPathName] = useState("/");

    function handleClick (){
        setMenuStatus(!menuStatus);
       
    }

    useEffect(() => {
        console.log("menu link change")

    }, [pathName]);

    // const [pageStatus, setPageStatus] = useState(true);

    console.log(window.location.pathname);
    let location = window.location.pathname;

    return (
			<header className={styles.siteHeader}>
				<h1 className={styles.siteTitle}>🔥Fireplace Palace</h1>
				<img
					onClick={handleClick}
					className={styles.menuOpen}
					src="images/menu-open-button.png"
					alt="open menu burger button"
				/>
				{menuStatus && (
					<div className={styles.menu}>
                        <img onClick={handleClick} className={styles.menuClose} src="images/menu-close-button.png" alt="close menu button"	/>
						
                        <nav>
                        <ul className={styles.linkList}>
                            <li><Link onClick={handleClick} className={styles.navLink} href="/">Home</Link></li>
                            <li><Link onClick={handleClick} className={styles.navLink} href="/founders">Meet the Founders</Link></li>
                            </ul>
                        </nav>
                    
					</div>
				)}
			</header>
		);
}

export default Header;