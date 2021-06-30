import "./App.css";
import "./components/MainPage";
import MainPage from "./components/MainPage";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { Heading, WhatsMyThing, WhatsTheirThing } from "./components";

function App() {
	return (
		<div className="App">
			<header className="App-header">
        <Heading />;
			</header>
      <main>
        <Switch>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/submit">
            <WhatsMyThing />
          </Route>
          <Route path="/guess">
            <WhatsTheirThing />
          </Route>
        </Switch>
      </main>
		</div>
	);
}

export default App;
