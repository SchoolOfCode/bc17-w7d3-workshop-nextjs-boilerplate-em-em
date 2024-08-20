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

    // Define a function that 
    const handleChange = function (event) {
        // Change state of fullName to the inputted value
        if(event.target.name === fullName) {
            setFullName(event.target.value);
        }
        if(event.target.name === postcode) {
            setPostcode(event.target.value);
        }
        if(event.target.name === address) {
            setAddress(event.target.value);
        }
        if(event.target.name === city) {
            setCity(event.target.value);
        }
    };

    console.log('full name: ', fullName);
    console.log('postcide: ', postcode);
    console.log('address: ', address);
    console.log('city: ', city);

    return (
        <form method='post'>
            <fieldset className = {styles.personalInfo}>
                <legend>Personal Information: </legend>
                <label htmlFor="">
                    Full Name: * <br />
                    <input type="text" name='fullName' onChange = {(e)=>handleChange(e)} value = {fullName}/>
                </label>
                <label htmlFor="">
                    Postcode: * <br />
                    <input type="text" name='postcode' onChange = {(e)=>handleChange(e)} value = {postcode}/>
                </label>
                <label>
                    House/Flat Number and Street Name: * <br />
                    <input type="text" name='street_address' onChange = {(e)=>handleChange(e)} value = {address}/>
                </label>
                <label htmlFor="">
                    City: * <br />
                    <input type="text" name='city' onChange = {(e)=>handleChange(e)} value = {city}/>
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