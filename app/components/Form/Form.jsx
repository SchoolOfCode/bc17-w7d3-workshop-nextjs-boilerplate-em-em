import styles from './Form.module.css';
import React from 'react';

export default function Form() {
    return (
        <form method='post'>
            <fieldset className = {styles.personalInfo}>
                <legend>Personal Information: </legend>
            </fieldset>

            <fieldset className = {styles.contactInfo}>
                <legend>Contact Information: </legend>
            </fieldset>
        </form>
    );
}