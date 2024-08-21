'use client';
import styles from './Form.module.css';
import React from 'react';
import { useState } from 'react';

export default function Form() {

    // Create state that stores the content inside fullname input box
    
	const[formData, setFormData] = useState({
		fullName: '', 
		postcode:'', 
		address:'', 
		city:'', 
		phone_num:'', 
		email:''
	});

    // Define a function that 
    const handleChange = function (event) {
		const {name, value} = event.target;
		setFormData((prevFormData) => ({...prevFormData, [name]: value}));
    };

    // Create state to show error status (false means no error)
    const [isError, setIsError] = useState(false);

    // Create handler function for submitting form.
    const handleSubmit = function (event) {
        event.preventDefault();
        // should check for empty fields
        // if any field is empty,
        if (!formData.fullName || !formData.postcode || !formData.address || !formData.city || !formData.phone_num || !formData.email) {     
        // should display error and prompt to fill form
        setIsError(!isError);
        // else, console log filled fields
        } else { 
            console.log(`Full Name: ${formData.fullName}, Postcode: ${formData.postcode}, Address: ${formData.address}, City: ${formData.city}, Phone Number: ${formData.phone_num}, Email: ${formData.email}`);
            setIsError(false)
        };
    };

    return (
			<form method="post" onSubmit={handleSubmit}>
				<fieldset className={styles.fieldset}>
					<legend>Personal Information: </legend>
					<label>
						Full Name: * <br />
						<input
							type="text"
							name="fullName"
							onChange={(e) => handleChange(e)}
							value={formData.fullName}
						/>
					</label>
					<label>
						Postcode: * <br />
						<input
							type="text"
							name="postcode"
							onChange={(e) => handleChange(e)}
							value={formData.postcode}
						/>
					</label>
					<label>
						House/Flat Number and Street Name: * <br />
						<input
							type="text"
							name="address"
							onChange={(e) => handleChange(e)}
							value={formData.address}
						/>
					</label>
					<label>
						City: * <br />
						<input
							type="text"
							name="city"
							onChange={(e) => handleChange(e)}
							value={formData.city}
						/>
					</label>
				</fieldset>

				<fieldset className={styles.fieldset}>
					<legend>Contact Information: </legend>
					<label>
						Phone Number: * <br />
						<input
							type="text"
							name="phone_num"
							onChange={(e) => handleChange(e)}
							value={formData.phone_num}
						/>
					</label>
					<label>
						Email Address: * <br />
						<input
							type="text"
							name="email"
							onChange={(e) => handleChange(e)}
							value={formData.email}
						/>
					</label>
				</fieldset>
                {isError && <p style={{color:"red"}}>Error all fields are required - some missing</p>}
				<button type="submit">Request Design Consultation</button>
			</form>
		);
}