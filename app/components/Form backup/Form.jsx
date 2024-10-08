'use client';
import styles from './Form.module.css';
import React from 'react';
import { useState } from 'react';

export default function Form() {

    // Create state that stores the content inside fullname input box
    const [fullName, setFullName] = useState('');
    const [postcode, setPostcode] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [phone_num, setPhoneNum] = useState("");
    const [email, setEmail] = useState("");

    // Define a function that 
    const handleChange = function (event) {
        // Change state of fullName to the inputted value
        if(event.target.name === "fullName" ) {
            setFullName(event.target.value);
        }
        if(event.target.name === "postcode") {
            setPostcode(event.target.value);
        }
        if(event.target.name === "address") {
            setAddress(event.target.value);
        }
        if(event.target.name === "city") {
            setCity(event.target.value);
        }

        if (event.target.name === "phone_num") {
				setPhoneNum(event.target.value);
        } 
        
        if (event.target.name === "email") {
					setEmail(event.target.value);
				} 
    };

    // console.log('full name: ', fullName);
    // console.log('postcode: ', postcode);
    // console.log('address: ', address);
    // console.log('city: ', city);
    // console.log("phone number: ", phone_num);
    // console.log("email: ", email);

    // Create state to show error status (false means no error)
    const [isError, setIsError] = useState(false);

    // Create handler function for submitting form.
    const handleSubmit = function (event) {
        event.preventDefault();
        // should check for empty fields
        // if any field is empty,
        if (fullName === "" || postcode === "" || address === "" || city === "" || phone_num === "" || email === "") {     
        // should display error and prompt to fill form
        setIsError(!isError);
    console.log('line 60 form.jsx error - all fields required')
        // else, console log filled fields
        } else { 
            console.log('full name: ', fullName);
            console.log('postcode: ', postcode);
            console.log('address: ', address);
            console.log('city: ', city);
            console.log("phone number: ", phone_num);
            console.log("email: ", email);
            setIsError(false)
        };
    };

    return (
			<form method="post" onSubmit={handleSubmit}>
				<fieldset className={styles.personalInfo}>
					<legend>Personal Information: </legend>
					<label>
						Full Name: * <br />
						<input
							type="text"
							name="fullName"
							onChange={(e) => handleChange(e)}
							value={fullName}
						/>
					</label>
					<label>
						Postcode: * <br />
						<input
							type="text"
							name="postcode"
							onChange={(e) => handleChange(e)}
							value={postcode}
						/>
					</label>
					<label>
						House/Flat Number and Street Name: * <br />
						<input
							type="text"
							name="address"
							onChange={(e) => handleChange(e)}
							value={address}
						/>
					</label>
					<label>
						City: * <br />
						<input
							type="text"
							name="city"
							onChange={(e) => handleChange(e)}
							value={city}
						/>
					</label>
				</fieldset>

				<fieldset className={styles.contactInfo}>
					<legend>Contact Information: </legend>
					<label>
						Phone Number: * <br />
						<input
							type="text"
							name="phone_num"
							onChange={(e) => handleChange(e)}
							value={phone_num}
						/>
					</label>
					<label>
						Email Address: * <br />
						<input
							type="text"
							name="email"
							onChange={(e) => handleChange(e)}
							value={email}
						/>
					</label>
				</fieldset>
                {isError && <p style={{color:"red"}}>Error all fields are required - some missing</p>}
				<button type="submit">Request Design Consultation</button>
			</form>
		);
}