import "./App.css";
import "./components/MainPage";
import MainPage from "./components/MainPage";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Heading, WhatsMyThing, WhatsTheirThing } from "./components";
import Heading from "./components/Heading";
import WhatsMyThing from "./components/whatsMyThing";
import WhatsTheirThing from "./components/WhatsTheirThing";

function App() {
	const saveFormDataHandler = (formData) => {
		const formInput = {
			...formData,
		};

		console.log(`App.js has the form data now: ${formInput.name}`);
	};

	return (
		<div className="App">
			<header className="App-header">
				<Heading />
			</header>
			<main>
				<Router>
					<Switch>
						<Route path="/main">
							<MainPage />
						</Route>
						<Route path="/submit">
							<WhatsMyThing
								onSaveFormData={saveFormDataHandler}
							/>
						</Route>
						<Route path="/guess">
							<WhatsTheirThing />
						</Route>
					</Switch>
				</Router>
			</main>
		</div>
	);
}

export default App;
