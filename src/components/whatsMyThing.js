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
			<div className="text-large-black">Submit yer thing ya schmuck</div>
			<form onSubmit={submitHander} className="form">
				<div className="form-section">
					<div className="input-1">
						<label className="text-large">
							Name Of Thing:
							<input
								className="input-area"
								type="text"
								value={enteredName}
								onChange={nameChangeHandler}
							/>
						</label>
					</div>
					<div className="input-1">
						<label className="text-large">Submit Image:</label>
						<input
							className="input-area-file"
							type="file"
							onChange={imageChangeHander}
						/>
					</div>
					<div className="input-1">
						<label className="text-large">Description:</label>
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
