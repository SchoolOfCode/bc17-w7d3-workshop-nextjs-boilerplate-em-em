import React from "react";
import styles from "./Button.module.css"

export default function Button() {
    
    const [selectedCountry, setSelectedCountry] = useState(null);
    
    function handleCountryClick(){
        //set the country to the name of the button clicked
        //fetch a single review from that country
    }
    return(
        <button onClick={handleCountryClick} className={styles.button}>England</button>
    )
}