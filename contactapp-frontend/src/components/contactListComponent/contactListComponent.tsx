import React, { useEffect, useState, Fragment } from "react";
import "./styles.css";
import PlusSvg from "../../assets/svgs/plus.svg";
import { Button, Divider } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import ContactItemComponent from "../contactItemComponent/contactItemComponent";

const renderContact = () => {
	return (
		<li>
			<ContactItemComponent />
		</li>
	);
}; //render flatlist of contact items

const AddButton: React.FC = () => {
	return (
		<div>
			<Button className="AddButton" type="primary" shape="circle" icon={<PlusOutlined />} />
		</div>
	);
};

const ContactListComponent: React.FC = () => {
	return (
		<Fragment>
			<Router>
				<div className="AppHeader">
					<div>Contacts</div>
					<Link to="/AddContact">
						<AddButton />
					</Link>
				</div>

				<div className="ContactList">
					<li>
						<ContactItemComponent />
					</li>
					<li>
						<ContactItemComponent />
					</li>
					<li>
						<ContactItemComponent />
					</li>
					<li>
						<ContactItemComponent />
					</li>
					<li>
						<ContactItemComponent />
					</li>
					<li>
						<ContactItemComponent />
					</li>
					<li>
						<ContactItemComponent />
					</li>
					<li>
						<ContactItemComponent />
					</li>
					<li>
						<ContactItemComponent />
					</li>
					<li>
						<ContactItemComponent />
					</li>
					<li>
						<ContactItemComponent />
					</li>
					<li>
						<ContactItemComponent />
					</li>
					<li>
						<ContactItemComponent />
					</li>
				</div>
			</Router>
		</Fragment>
	);
};

export default ContactListComponent;
