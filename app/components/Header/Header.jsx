'use client';

import React from "react";
import { useState, useEffect } from "react";

import styles from "./Header.module.css";
import Link from "next/link";


const Header = function () {

    const [menuStatus, setMenuStatus] = useState(false);

	// Function that changes the state of menuStatus from true to false
    function handleClick (){
        setMenuStatus(!menuStatus);   
    }

    return (
			<header className={styles.siteHeader}>
				<h1 className={styles.siteTitle}>🔥Fireplace Palace</h1>
				<img
					onClick={handleClick} // When the burger menu icon is clicked, the menu status changes to true
					className={styles.menuOpen}
					src="images/menu-open-button.png"
					alt="open menu burger button"
				/>
				{/* Given that menu status is true, do the following things after &&: */}
				{menuStatus && (
					// - return a div element containing a nav and the links in the form of a list
					<div className={styles.menu}> 
                        <img onClick={handleClick} className={styles.menuClose} src="images/menu-close-button.png" alt="close menu button"	/>
                        <nav>
                        <ul className={styles.linkList}>
							{/* the ? represents a condition that (if the pathname of the open window
							matches the url of the page we are looking at), then select the style that underlines the link */}
                            <li><Link onClick={handleClick} className={(window.location.pathname === "/") ? styles.navLinkActive : styles.navLink} href="/">Home</Link></li>
                            <li><Link onClick={handleClick} className={(window.location.pathname === "/founders") ? styles.navLinkActive : styles.navLink} href="/founders">Meet the Founders</Link></li>
                            </ul>
                        </nav>
                    
					</div>
				)}
			</header>
		);
}

export default Header;