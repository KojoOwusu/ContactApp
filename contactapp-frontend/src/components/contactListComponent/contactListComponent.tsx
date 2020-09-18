import React, { useEffect, useState, Fragment } from "react";
import "./styles.css";
import PlusSvg from "../../assets/svgs/plus.svg";
import { Button, Divider } from "antd";
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import ContactItemComponent from "../contactItemComponent/contactItemComponent";
import { useQuery } from "@apollo/client";
import { FETCH_CONTACTS } from "../../api/query";

const renderContact = (serverData: { id: number; firstname: string }) => {
	return (
		<Link to={`/contactDetails:${serverData.id}`}>
			<li>
				<ContactItemComponent contact_id={serverData.id} firstname={serverData.firstname} />
			</li>
		</Link>
	);
}; //render flatlist of contact items

const AddButton: React.FC = () => {
	return (
		<div>
			<Link to="/addContact">
				<Button
					className="AddButton"
					type="primary"
					shape="circle"
					icon={<PlusOutlined />}
					size="large"
				/>
			</Link>
		</div>
	);
};

const ContactListComponent: React.FC = () => {
	const { loading, error, data } = useQuery(FETCH_CONTACTS);

	if (loading) return <p>loading</p>;
	if (error) console.log(`Error: ${error.message}`);

	return (
		<Fragment>
			<div className="AppHeader">
				<div>Contacts</div>
				<AddButton />
			</div>

			<div className="ContactList">
				{data.contacts.map((item: { id: number; firstname: string }) => {
					console.log(item);
					return renderContact(item);
				})}
			</div>
		</Fragment>
	);
};

export default ContactListComponent;
