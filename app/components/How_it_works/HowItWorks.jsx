import React from "react";
import styles from "./HowItWorks.module.css";
import Card from "../Card/Card.jsx";

const HowItWorks = function() {
    const cards = [{
        image: "images/how-it-works-1.png",
        image_alt: "couches", 
        heading: "Give us a call ...",   
        text: "Call us and book in a 'Design Consultation' for a date and time to suit you.", 
    }, {
        image: "images/how-it-works-2.png",
        image_alt: "clean desk", 
        heading: "We come to you ...",   
        text: "We come to your home to do an assessment of the space and to your style preference.", 
    }, {
        image: "images/how-it-works-3.png",
        image_alt: "couch", 
        heading: "We recommend ...",   
        text: "We send you a bespoke set of fireplace recommendations.", 
    }];
    // const card = {
    //     image: "images/how-it-works-1.png",
    //     image_alt: "couches", 
    //     heading: "Give us a call ...",   
    //     text: "Call us and book in a 'Design Consultation' for a date and time to suit you.", 
    // }
    return(
        <>
            <section className={styles.how_it_works}>
                <h2 className={styles.how_it_works_h2}>How it works.</h2>
                {cards.map((card) => {
                    return <Card image={card.image} image_alt={card.image_alt} heading={card.heading} text={card.text} />
                })
                }                
            </section>
        </>
    );
}

export default HowItWorks;