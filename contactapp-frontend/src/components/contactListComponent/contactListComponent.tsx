import React, { useEffect, useState, Fragment } from "react";
import "./styles.css";
import PlusSvg from "../../assets/svgs/plus.svg";
import { Button, Divider } from "antd";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
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
	const history = useHistory();
	return (
		<div>
			<Link to="/addContact">
				<Button
					className="AddButton"
					type="primary"
					shape="circle"
					icon={<PlusOutlined />}
				/>
			</Link>
		</div>
	);
};

const ContactListComponent: React.FC = () => {
	return (
		<Fragment>
			<div className="AppHeader">
				<div>Contacts</div>
				<AddButton />
			</div>

			<div className="ContactList">
				<Link to="/contactDetails">
					<li>
						<ContactItemComponent />
					</li>
				</Link>
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
		</Fragment>
	);
};

export default ContactListComponent;
