'use client';

import React, { useEffect, useState } from 'react';
import styles from './Trusted.module.css';
// import Button from '../Button/Button.jsx';

export default function Trusted () {

    // Set some state variables and their corresponding setter functions

    const [selectedCountry, setSelectedCountry] = useState(null); // selectedCountry represents the country that the review is from
    const [selectedReview, setSelectedReview] = useState([]); // selectedReview contains the fetched review
 
    // useEffect which will fetch a review from the corresponding selectedCountry, only if selectedCountry's state changes
    
    useEffect ( ()=> {
        if(selectedCountry !== null){
        fetch(`https://seal-app-336e8.ondigitalocean.app/reviews?country=${selectedCountry}`)
        .then(response => response.json())
        .then(json => setSelectedReview(json))        
}}, [selectedCountry] );
    

    return(
        <section className = {styles.trusted}>
            <h2 className = {styles.trustedTitle}>Trusted.</h2>
            <p className={styles.trustedText}>We've got thousands of happy customers all over the UK. Choose your country to see the latest review</p>
            <div className={styles.review}>
                <ul className={styles.trustedList}>
                    {/* each time the buttons get clicked, the setSelectedCountry setter function changes the
                    state of selectedCountry to the specified country. This consequently triggers the useEffect
                    to fetch the selectedReview for that corresponding country */}
                    <li><button onClick={()=> setSelectedCountry('england')} className={styles.button}>England</button></li>
                    <li><button onClick={()=> setSelectedCountry('wales')} className={styles.button}>Wales</button></li>
                    <li><button onClick={()=> setSelectedCountry('scotland')} className={styles.button}>Scotland</button></li>
                </ul>
                <div>
                    {/* this returns the actual review, turned in to string content. */}
                    <p>{JSON.stringify(selectedReview.text)}</p>
                    <br/ >
                    {/* this returns the review's author, turned in to string content. */}
                    <p>{JSON.stringify(selectedReview.author)}</p>
                </div>
            </div>
        </section>
    );
}