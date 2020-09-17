import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Image, Row } from "antd";
import React, { useState } from "react";
import defaultUserLogo from "../../assets/images/user.png";
import ContactInput from "../../shared/components/contactInput/ContactInput";
import "./styles.css";

const EmptyUserAvatar = () => {
	return (
		<div className="image-wrapper">
			<Image width={200} height={200} src={defaultUserLogo} />
		</div>
	);
};

const Names = () => {
	return (
		<Row gutter={[16, 16]}>
			<Col span={12}>
				<ContactInput type="text" placeholder="Firstname" />
			</Col>
			<Col span={12}>
				<ContactInput type="text" placeholder="Lastname" />
			</Col>
		</Row>
	);
};

let phoneNumberId = 1;
const genPhoneId = () => {
	return phoneNumberId++;
};
const Phone = () => {
	const [phoneNumbers, setPhoneNumbers] = useState([
		{
			id: phoneNumberId,
			phoneNumber: "",
		},
	]);

	const addPhone = () => {
		setPhoneNumbers([
			...phoneNumbers,
			{
				id: genPhoneId(),
				phoneNumber: "",
			},
		]);
	};

	const removePhone = (id: number) => {
		const index = phoneNumbers.findIndex((item) => item.id === id);
		let arr = [...phoneNumbers];
		arr.splice(index, 1);
		setPhoneNumbers([...arr]);
	};
	return (
		<div style={{ margin: " 0" }}>
			{[...phoneNumbers].map((item, index) => {
				return (
					<ContactInput
						remove={removePhone}
						key={index}
						value={item.phoneNumber}
						id={item.id}
						icon
						placeholder="Phone"
						type="text"
					/>
				);
			})}

			<Button
				style={{ marginTop: "0.5rem" }}
				icon={<PlusOutlined />}
				type="primary"
				onClick={addPhone}
			>
				Add Phone
			</Button>
		</div>
	);
};

let emailId = 1;
const genEmailId = () => {
	return emailId++;
};
const Email = () => {
	const [emails, setEmails] = useState([
		{
			id: emailId,
			email: "",
		},
	]);

	const addEmail = () => {
		setEmails([...emails, { id: genEmailId(), email: "" }]);
	};

	const removeEmail = (id: number) => {
		const index = emails.findIndex((item) => item.id === id);
		let arr = [...emails];
		arr.splice(index, 1);
		setEmails([...arr]);
	};
	return (
		<div style={{ margin: " 0" }}>
			{[...emails].map((item, index) => {
				return (
					<ContactInput
						remove={removeEmail}
						value={item.email}
						id={item.id}
						key={index}
						icon
						placeholder="Email"
						type="text"
					/>
				);
			})}

			<Button
				style={{ marginTop: "0.5rem" }}
				icon={<PlusOutlined />}
				type="primary"
				onClick={addEmail}
			>
				Add Email
			</Button>
		</div>
	);
};

const Twitter = () => {
	return (
		<div style={{ margin: "1rem 0" }}>
			<ContactInput placeholder="Twitter" type="text" />
		</div>
	);
};
const ContactDetailsComponent: React.FC = () => {
	return (
		<div className="contact-details">
			<div style={{ fontSize: "1.2rem" }}>Edit Contact</div>
			<EmptyUserAvatar />

			<div style={{ overflowY: "auto", width: "100%" }}>
				<Names />

				<Phone />

				<Email />

				<Twitter />
			</div>

			<Button type="primary">Save</Button>
		</div>
	);
};
export default ContactDetailsComponent;
