import React from "react";
import "./App.css";

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
					<ContactDetailsComponent />
				</div>
			</div>
		</div>
	);
};

export default App;
