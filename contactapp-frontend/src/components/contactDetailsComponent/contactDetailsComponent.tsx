import React, { useEffect, useState } from "react";
import "./styles.css";
import UserSvg from "../../assets/svgs/user.svg";
import Phone from "../../assets/svgs/phone.svg";
import { Button, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Twitter from "../../assets/svgs/twitter.svg";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import Email from "../../assets/svgs/email.svg";

const NoContactSelectedComponent: React.FC = () => {
	return <div className="NoContact">No Contact Selected</div>;
};

const ContactDetailsComponent: React.FC = () => {
	const [ContactDetails, setContactDetails] = useState([]);

	return (
		/*<NoContactSelectedComponent />*/

		<div className="MainContainer">
			<div className="HeaderArea">
				<img src={UserSvg}></img>

				<span className="ContactName">Kojo Owusuuu </span>
				<Link to="/editContact">
					<Button type="link" size="large" className="editButton">
						{" "}
						Edit{" "}
					</Button>
				</Link>
			</div>

			<div className="FieldContainer">
				<div className="iconTextHeader">
					<img src={Phone}></img>
					Phonenumber
				</div>
				<div className="ContactInfoField">
					<div>+233 55 151 5302</div>
					<div>Work</div>
				</div>
				<div className="ContactInfoField">
					<div>+233 55 151 5302</div>
					<div>Work</div>
				</div>
			</div>
			<div className="FieldContainer">
				<div className="iconTextHeader">
					<img src={Email}></img>
					email
				</div>
				<div className="ContactInfoField">
					<div>owusukojo97@gmail.com</div>
					<div>home</div>
				</div>
			</div>
			<div className="FieldContainer">
				<div className="iconTextHeader">
					<img src={Twitter}></img>
					twitter
				</div>
				<div className="ContactInfoField">@Kojoowusu123</div>
			</div>
			<Button className="deleteButton" type="primary" danger>
				DELETE
			</Button>
		</div>
	);
};
export default ContactDetailsComponent;
