import React from "react";
import "./styles.css";
import UserSvg from "../../assets/svgs/user.svg";
import Phone from "../../assets/svgs/phone.svg";
import { Button } from "antd";
import Twitter from "../../assets/svgs/twitter.svg";
import Email from "../../assets/svgs/email.svg";

const ContactDetailsComponent: React.FC = () => {
	return (
		<div className="MainContainer">
			<div className="HeaderArea">
				<img src={UserSvg}></img>
				<span className="editButton">Edit Contact</span>
				<span className="ContactName">Kojo Owusuuu </span>
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
			<Button type="primary">Delete</Button>
		</div>
	);
};
export default ContactDetailsComponent;
