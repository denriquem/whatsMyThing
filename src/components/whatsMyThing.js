import React, { useState } from "react";
import "./whatsMyThing.css";

const WhatsMyThing = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredDescription, setEnteredDescription] = useState("");
	const [enteredImage, setEnteredImage] = useState(null);

	const nameChangeHandler = (event) => {
		setEnteredName(event.target.value);
	};

	const descriptionChangeHander = (event) => {
		setEnteredDescription(event.target.value);
	};

	const imageChangeHander = (event) => {
		setEnteredImage(event.target.files[0]);
	};

	const submitHander = (event) => {
		event.preventDefault();

		const formData = {
			name: enteredName,
			description: enteredDescription,
			image: enteredImage,
		};

		props.onSaveFormData(formData);

		console.log(formData);

		setEnteredName("");
		setEnteredDescription("");
		setEnteredImage(null);
	};

	return (
		<div>
			<div>Submit yer thing ya schmuck</div>
			<form onSubmit={submitHander}>
				<div className="form-section">
					<div className="input-1">
						<label>
							Name of thing:
							<input
								className="input-area"
								type="text"
								value={enteredName}
								onChange={nameChangeHandler}
							/>
						</label>
					</div>
					<div className="input-1">
						<label>Please submit</label>
						<input
							className="input-area"
							type="file"
							onChange={imageChangeHander}
						/>
					</div>
					<div className="input-1">
						<label>Write about your thing</label>
						<textarea
							className="input-area"
							value={enteredDescription}
							onChange={descriptionChangeHander}
						></textarea>
					</div>
					<div className="input-1">
						<input
							className="submit-button"
							type="submit"
							value="Submit"
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default WhatsMyThing;
