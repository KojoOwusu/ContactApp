import React from "react";
import "./styles.css";
import defaultUserLogo from "../../assets/svgs/user.svg";

export interface IContactItemProps {
	contact_id: number;
	firstname: string;
}

const ContactItemComponent: React.FC<IContactItemProps> = ({ contact_id, firstname }) => {
	return (
		<div className="ContactItem">
			<img src={defaultUserLogo}></img>
			<div>{firstname}</div>
		</div>
	);
};
export default ContactItemComponent;
