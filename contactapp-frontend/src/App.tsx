import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from "react-router-dom";
import CreateContactComponent from "../src/components/createContactComponent/createContactComponent";
import { FETCH_CONTACTS } from "./api/query";
import { useQuery } from "@apollo/client";
import ContactListComponent from "./components/contactListComponent/contactListComponent";
import ContactDetailsComponent from "./components/contactDetailsComponent/contactDetailsComponent";
import NoContactComponent from "./components/noContactComponent/noContactComponent";

const App = () => {
	//const [serverData, setData] = useState({});

	return (
		<div className="MainWrapper">
			<div className="MainAppWindow">
				<div className="ContactsPane">
					<ContactListComponent />
				</div>
				<div className="SidePane">
					<Switch>
						<Route path="/" exact component={NoContactComponent} />
						<Route
							path="/contactDetails:contact_id"
							component={ContactDetailsComponent}
						/>

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
