'use client';
import styles from './Form.module.css';
import React from 'react';
import { useState } from 'react';

export default function Form() {

    // Create state that stores the content inside fullname input box
    const [fullName, setFullName] = useState('');

    // Define a function that 
    const handleFullName = function (event) {
        // Change state of fullName to the inputted value
        setFullName(event.target.value);
    };

    console.log('full name: ', fullName);

    return (
        <form method='post'>
            <fieldset className = {styles.personalInfo}>
                <legend>Personal Information: </legend>
                <label htmlFor="">
                    Full Name: * <br />
                    <input type="text" name='fullName' onChange = {(e)=>handleFullName(e)} value = {fullName}/>
                </label>
                <label htmlFor="">
                    Postcode: * <br />
                    <input type="text" name='postcode'/>
                </label>
                <label>
                    House/Flat Number and Street Name: * <br />
                    <input type="text" name='street_address'/>
                </label>
                <label htmlFor="">
                    City: * <br />
                    <input type="text" name='city'/>
                </label>
            </fieldset>

            <fieldset className = {styles.contactInfo}>
                <legend>Contact Information: </legend>
                <label htmlFor="">
                    Phone Number: * <br />
                    <input type="text" name='phone_num'/>
                </label>
                <label htmlFor="">
                    Email Address: * <br />
                    <input type="text" name='email'/>
                </label>
            </fieldset>
            <button type="submit">Request Design Consultation</button>
        </form>
    );
}