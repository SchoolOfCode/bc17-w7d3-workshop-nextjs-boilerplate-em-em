import styles from './Form.module.css';
import React from 'react';

export default function Form() {
    return (
        <form method='post'>
            <fieldset className = {styles.personalInfo}>
                <legend>Personal Information: </legend>
                <label htmlFor="">
                    Full Name: * <br />
                    <input type="text" name='fullName'/>
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