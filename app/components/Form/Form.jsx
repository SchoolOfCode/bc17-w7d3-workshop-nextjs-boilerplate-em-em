"use client";
import styles from "./Form.module.css";
import React from "react";
import { useState, useReducer } from "react";

// Define initial state for each of the values in the form
const initialState = {
	data: {
		fullName: "",
		postcode: "",
		address: "",
		city: "",
		phone_num: "",
		email: ""
	},
	
	status: "editing"
};

// Write reducer function that returns a new state depending on
// the switch case of scenario of action.type
const reducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_FIELD":
			return {
				data: {
					...state.data,      // this returns the data object contained in the state and spreads it out
					[action.payload.fieldName]: action.payload.fieldValue   // this adds this key:value to the data object
				}
			};
		case "ERROR":
			return {
				...state,
				status: "error"     // here, the status key within the state changes from 'editing' to 'error'
			};
		case "SUCCESS":
			return {
				...state,
				status : "success"
			}

		case "SUBMITTING": 
			return {
				...state,
				status : "submitting"
			}
		default:
			return state;
	}
};

// Create the component Form which will be used in the booking page
export default function Form() {
	
    // Initialise reducer hook which passes the reducer function and initial state created above
	const [state, dispatch] = useReducer(reducer, initialState);

	// Define a function that dispatches an action.type to the reducer function
    // as soon as any change has occured in the form's values
	const handleChange = function (event) {
		// Change state of fullName to the inputted value
		dispatch({
			type: "CHANGE_FIELD",
			payload: {
				fieldName: event.target.name,
				fieldValue: event.target.value,
			},
		});
	};

	// Create handler function for submitting form by dispatching the 'SUBMITTING'
    // action type to the reducer function
	const handleSubmit = function (event) {
		event.preventDefault();
		//set a 3 sec timer - as a minimum time to allow the submitting display to actually show
		dispatch({
			type: "SUBMITTING"
		})
		
        // Set a timer for 3 seconds which allows a better user experience
		setTimeout(() => {
		
		// if any field is empty,
		if (
			!state.data.fullName ||
			!state.data.postcode ||
			!state.data.address ||
			!state.data.city ||
			!state.data.phone_num ||
			!state.data.email
		) {
			// Dispatch error action type to reducer
			dispatch({
				type: "ERROR"
			})
			// else, console log filled fields
		} else {
			console.log("data: ", state.data);
			dispatch({
				type: "SUCCESS"
			})
		} 
	}, 3000)
};

	return (
		<form method="post" onSubmit={handleSubmit}>
			<fieldset className={styles.fieldset}>
				<legend className={styles.groupTitle}>Personal Information: </legend>
				<label>
					Full Name: * <br />
					<input
						type="text"
						name="fullName"
						onChange={(e) => handleChange(e)}
						value={state.data.fullName}
						className={styles.field}
					/>
				</label>

				<label>
					Postcode: * <br />
					<input
						type="text"
						name="postcode"
						onChange={(e) => handleChange(e)}
						value={state.data.postcode}
						className={styles.field}
					/>
				</label>

				<label>
					House/Flat No. & Street Name : * <br />
					<input
						type="text"
						name="address"
						onChange={(e) => handleChange(e)}
						value={state.data.address}
						className={styles.field}
					/>
				</label>

				<label>
					City: * <br />
					<input
						type="text"
						name="city"
						onChange={(e) => handleChange(e)}
						value={state.data.city}
						className={styles.field}
					/>
				</label>
			</fieldset>

			<fieldset className={styles.fieldset}>
				<legend className={styles.groupTitle}>Contact Information: </legend>
				<label>
					Phone Number: * <br />
					<input
						type="text"
						name="phone_num"
						onChange={(e) => handleChange(e)}
						value={state.data.phone_num}
						className={styles.field}
					/>
				</label>
				<label>
					Email Address: * <br />
					<input
						type="text"
						name="email"
						onChange={(e) => handleChange(e)}
						value={state.data.email}
						className={styles.field}
					/>
				</label>
			</fieldset>

            {/* If the state's status shows an error, display an error message in red for user
             otherwise display a green 'success' message*/}
			{state.status === "error" && (
				<p style={{ color: "red", padding: "1rem 0 0 0", fontSize: "2rem"  }}>
					Error all fields are required - some missing
				</p>
			)}
			{state.status === "success" && (
				<p style={{ color: "green", padding: "1rem 0 0 0", fontSize: "2rem" }}>
					Form submitted successfully!!
				</p>
			)}
			<button className={styles.submitButton} type="submit" disabled={state.status === "submitting" ? true : false}>
				
                {/* Visual indicator that the form is being submitted depending on state's status */}
                {state.status === "submitting" ? "Requesting ..." : "Request Design Consultation"}
			</button>
		</form>
	);
}
