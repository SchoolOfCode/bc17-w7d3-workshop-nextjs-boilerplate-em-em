"use client";
import styles from "./Form.module.css";
import React from "react";
import { useState, useReducer } from "react";

// Define initial state for one value
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

// Write reducer function
const reducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_FIELD":
			return {
				data: {
					...state.data,
					[action.payload.fieldName]: action.payload.fieldValue,
				}
			};
		case "ERROR":
			return {
				...state,
				status: "error"
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

export default function Form() {
	// initialise reducer hook passing reducer function and initial state created above
	const [state, dispatch] = useReducer(reducer, initialState);

	// Define a function that
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

	// Create handler function for submitting form.
	const handleSubmit = function (event) {
		event.preventDefault();
		//set a 3 sec timer - as a minimum time to allow the submitting display to actually show
		dispatch({
			type: "SUBMITTING"
		})
		
		setTimeout(() => {
		// should check for empty fields
		// if any field is empty,
		if (
			!state.data.fullName ||
			!state.data.postcode ||
			!state.data.address ||
			!state.data.city ||
			!state.data.phone_num ||
			!state.data.email
		) {
			// should display error and prompt to fill form
			// dispatch error action type
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
			{state.status === "error" && (
				<p style={{ color: "red" }}>
					Error all fields are required - some missing
				</p>
			)}
			<button className={styles.submitButton} type="submit">{state.status === "submitting" ? "Requesting ..." : "Request Design Consultation"}</button>
		</form>
	);
}
