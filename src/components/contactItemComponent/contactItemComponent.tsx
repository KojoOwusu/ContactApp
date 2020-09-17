import React from "react";
import "./styles.css";
import defaultUserLogo from "../../assets/svgs/user.svg";

interface IContactItemProps {
	contact: {
		firstname: string;
		lastname: string;
	};
}

const ContactItemComponent: React.FC = () => {
	return (
		<div className="ContactItem">
			<img src={defaultUserLogo}></img>
			<div>Kojo Owusuuu</div>
		</div>
	);
};
export default ContactItemComponent;
