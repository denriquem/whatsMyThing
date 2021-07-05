import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
	return (
		<div>
			<li>
				<Link to="/">Hello Link!</Link>
			</li>
			<p>Main Page test</p>
			<button>What's My Thing?</button>
			<button>What's Their Thing?</button>
		</div>
	);
};

export default MainPage;
