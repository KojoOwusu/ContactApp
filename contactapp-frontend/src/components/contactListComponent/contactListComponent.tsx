import React, { useEffect, useState } from "react";
import "./styles.css";
import PlusSvg from "../../assets/svgs/plus.svg";
import ContactItemComponent from "../contactItemComponent/contactItemComponent";

const renderContactList = () => {}; //render flatlist of contact items

const ContactListComponent: React.FC = () => {
	return (
		<div>
			<div className="AppHeader">
				<div>Contacts</div>
				<img src={PlusSvg}></img>
			</div>

			<div>
				<ContactItemComponent />
				<ContactItemComponent />
				<ContactItemComponent />
				<ContactItemComponent />
				<ContactItemComponent />
				<ContactItemComponent />
				<ContactItemComponent />
				<ContactItemComponent />
			</div>
		</div>
	);
};

export default ContactListComponent;
