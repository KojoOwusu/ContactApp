import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateContactComponent from "../src/components/createContactComponent/createContactComponent";

import ContactListComponent from "./components/contactListComponent/contactListComponent";
import ContactDetailsComponent from "./components/contactDetailsComponent/contactDetailsComponent";

const App = () => {
	return (
		<div className="MainWrapper">
			<div className="MainAppWindow">
				<div className="ContactsPane">
					<ContactListComponent />
				</div>
				<div className="SidePane">
					<Switch>
						<Route path="/contactDetails">
							<ContactDetailsComponent />
						</Route>
						<Route path="/addContact">
							<CreateContactComponent />
						</Route>
						<Route path="/editContact">
							<CreateContactComponent />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default App;
