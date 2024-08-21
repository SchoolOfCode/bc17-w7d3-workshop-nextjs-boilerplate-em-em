'use client';
import styles from './Form.module.css';
import React from 'react';
import { useState } from 'react';



// Define initial state for one value
const initialState = {
    data : {
        fullName : ""
    },
    error : false
}


// Write reducer function
const reducer = (state, action) => {
    switch (action.type){
        case 'CHANGE_FIELD': 
        return {
            data : {
                ...state.data, [action.payload.fieldName] : action.payload.fieldValue
            }
        } 
        default:
        return state;
    }
}

export default function Form() {

    // Create state that stores the content inside fullname input box
    const [fullName, setFullName] = useState('');

    // Define a function that 
    const handleChange = function (event) {
        // Change state of fullName to the inputted value
        if(event.target.name === "fullName" ) {
            setFullName(event.target.value);
        }
    };

    // Create state to show error status (false means no error)
    const [isError, setIsError] = useState(false);

    // Create handler function for submitting form.
    const handleSubmit = function (event) {
        event.preventDefault();
        // should check for empty fields
        // if any field is empty,
        if (fullName === "") {     
        // should display error and prompt to fill form
        setIsError(!isError);
    console.log('line 60 form.jsx error - all fields required')
        // else, console log filled fields
        } else { 
            console.log('full name: ', fullName);
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
				</fieldset>

				<fieldset className={styles.contactInfo}>
					<legend>Contact Information: </legend>
				</fieldset>
                {isError && <p style={{color:"red"}}>Error all fields are required - some missing</p>}
				<button type="submit">Request Design Consultation</button>
			</form>
		);
}