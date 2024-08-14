import React from "react";

import styles from "./Footer.module.css";

const Footer = function() {
    return (
        <>
            <footer className={styles.site_footer}>
                <div className="find-us flex">
                    <p>Find us on:</p>
                    <p>
                        Facebook<br />
                        Instagram<br />
                        Tiktok<br />
                    </p>
                </div>
                <div className="copyright-info flex">
                    <p>©️ Fireplace Palace</p>
                    <p><a href="mailto:info@firepalace.co.uk">info@firepalace.co.uk</a></p>
                </div>
            </footer>
        </>
    );
}

export default Footer;