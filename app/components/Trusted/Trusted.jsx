import React, { useEffect } from 'react';
import styles from './Trusted.module.css';
import Button from '../Button/Button.jsx';

export default function Trusted () {

    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect ( ()=> {

    }, [selectedCountry] )


    return(
        <section className = {styles.trusted}>
            <h2 className = {styles.trustedTitle}>Trusted.</h2>
            <p className={styles.trustedText}>We've got thousands of happy customers all over the UK. Choose your country to see the latest review</p>
            <div className={styles.review}>
                <ul className={styles.trustedList}>
                    <li><Button /></li>
                    <li><Button /></li>
                    <li><Button /></li>
                </ul>
            </div>
        </section>
    );
}