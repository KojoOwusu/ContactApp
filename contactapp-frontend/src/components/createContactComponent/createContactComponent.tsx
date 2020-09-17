import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Image, Row } from "antd";
import React, { useState } from "react";
import UserSvg from "../../assets/svgs/user.svg";
import ContactInput from "../../shared/components/contactInput/ContactInput";
import "./styles.css";

let phoneNumberId = 1;
const genPhoneId = () => {
	return ++phoneNumberId;
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

	const editPhoneNumber = (id: number, phoneNumber: string) => {
		let arr = [...phoneNumbers];
		const index = arr.findIndex((item) => item.id === id);

		arr[index] = { ...arr[index], phoneNumber };
		setPhoneNumbers([...arr]);
	};

	const removePhone = (id: number) => {
		let arr = phoneNumbers;
		const index = arr.findIndex((item) => item.id === id);
		console.log(arr);
		arr.splice(index, 1);
		setPhoneNumbers([...arr]);
	};
	return (
		<div style={{ margin: " 0" }}>
			{phoneNumbers.map((item, index) => {
				return (
					<ContactInput
						remove={removePhone}
						onChange={editPhoneNumber}
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
				style={{
					marginTop: "0.5rem",
				}}
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
	return ++emailId;
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
		let arr = emails;
		const index = arr.findIndex((item) => item.id === id);
		console.log(arr);
		arr.splice(index, 1);
		setEmails([...arr]);
	};

	const editEmail = (id: number, email: string) => {
		let arr = [...emails];
		const index = arr.findIndex((item) => item.id === id);

		arr[index] = { ...arr[index], email };
		setEmails([...arr]);
	};

	console.log(emails);
	return (
		<div style={{ margin: "0" }}>
			{emails.map((item, index) => {
				return (
					<ContactInput
						remove={removeEmail}
						onChange={editEmail}
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
interface IContact {
	Name: string;
}

const CreateContactComponent: React.FunctionComponent<IContact> = ({ Name }) => {
	return (
		<div className="contact-details">
			<div
				style={{
					fontSize: "1.2rem",
					fontFamily: "Segoe UI",
					fontWeight: "bold",
					marginTop: "2rem",
					color: " rgba(48, 54, 141, 0.8)",
				}}
			>
				{Name}
			</div>
			<div className="image-wrapper">
				<Image className="Image" src={UserSvg} />
			</div>

			<div className="input-wrapper">
				<Row gutter={[16, 16]}>
					<Col span={12}>
						<ContactInput type="text" placeholder="Firstname" />
					</Col>
					<Col span={12}>
						<ContactInput type="text" placeholder="Lastname" />
					</Col>
				</Row>

				<Phone />

				<Email />

				<div style={{ margin: "1rem 0" }}>
					<ContactInput placeholder="Twitter" type="text" />
				</div>
			</div>

			<Button className="SaveButton" type="primary">
				Save
			</Button>
		</div>
	);
};
export default CreateContactComponent;
