import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import CreateContactComponent from "../src/components/createContactComponent/createContactComponent";
import { client } from "./config/apolloClientsetup";

import ContactListComponent from "./components/contactListComponent/contactListComponent";
import ContactDetailsComponent from "./components/contactDetailsComponent/contactDetailsComponent";
import NoContactComponent from "./components/noContactComponent/noContactComponent";

const App = () => {
	let addContact = "Add Contact";
	return (
		<div className="MainWrapper">
			<div className="MainAppWindow">
				<div className="ContactsPane">
					<ContactListComponent />
				</div>
				<div className="SidePane">
					<Switch>
						<Route path="/" exact component={NoContactComponent} />
						<Route path="/contactDetails" exact component={ContactDetailsComponent} />

						<Route exact path="/addContact">
							<CreateContactComponent Name="Add Contact" />
						</Route>

						<Route exact path="/editContact">
							<CreateContactComponent Name="Edit Contact" />
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
};

export default App;
