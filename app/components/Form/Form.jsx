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
	error: false,
};

// Write reducer function
const reducer = (state, action) => {
	switch (action.type) {
		case "CHANGE_FIELD":
			return {
				data: {
					...state.data,
					[action.payload.fieldName]: action.payload.fieldValue,
				},
				// error: state.error
			};
		case "ERROR":
			return {
				error: true
			};
		default:
			return state;
	}
};

export default function Form() {
	// Create state that stores the content inside fullname input box
	// const [fullName, setFullName] = useState("");
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

	// Create state to show error status (false means no error)
	const [isError, setIsError] = useState(false);

	// Create handler function for submitting form.
	const handleSubmit = function (event) {
		event.preventDefault();
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
			setIsError(true);
			console.log("line 60 form.jsx error - all fields required");
			// else, console log filled fields
		} else {
			console.log("data: ", state.data);
			setIsError(false);
		}
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
						value={state.data.fullName}
					/>
				</label>

				<label>
					Postcode: * <br />
					<input
						type="text"
						name="postcode"
						onChange={(e) => handleChange(e)}
						value={state.data.postcode}
					/>
				</label>

				<label>
					House/Flat No. & Street Name : * <br />
					<input
						type="text"
						name="address"
						onChange={(e) => handleChange(e)}
						value={state.data.address}
					/>
				</label>

				<label>
					City: * <br />
					<input
						type="text"
						name="city"
						onChange={(e) => handleChange(e)}
						value={state.data.city}
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
						value={state.data.phone_num}
					/>
				</label>
				<label>
					Email Address: * <br />
					<input
						type="text"
						name="email"
						onChange={(e) => handleChange(e)}
						value={state.data.email}
					/>
				</label>
			</fieldset>
			{isError && (
				<p style={{ color: "red" }}>
					Error all fields are required - some missing
				</p>
			)}
			<button type="submit">Request Design Consultation</button>
		</form>
	);
}
