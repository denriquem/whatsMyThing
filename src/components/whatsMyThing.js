import React from "react";

const WhatsMyThing = () => {
	return (
		<div>
			<div>Test What's My thing</div>
			<form>
				<div className="new-expense__controls">
					<div className="new expense__control">
						<label>Write about your thing</label>
						<textarea>
							This is the area to write a bit about what it is
						</textarea>
					</div>
					<div className="new expense__control">
						<label>This is the form bit</label>
						<textarea>
							This is the area to write a bit about what it is
						</textarea>
					</div>
				</div>
			</form>
		</div>
	);
};

export default WhatsMyThing;
