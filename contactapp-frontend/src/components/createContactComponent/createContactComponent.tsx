import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Image, Row } from "antd";
import React, { useState, useEffect } from "react";
import UserSvg from "../../assets/svgs/user.svg";
import ContactInput from "../../shared/components/contactInput/ContactInput";
import "./styles.css";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

let phoneNumberId = 1;
const genPhoneId = () => {
	return ++phoneNumberId;
};
const Phone = (props: {
	onChange: (phoneNumbers: Array<{ phonenumber: string; purpose: string }>) => void;
}) => {
	const { onChange } = props;
	const [phonenumbers, setPhonenumbers] = useState([""]);

	const addPhone = () => {
		setPhonenumbers([...phonenumbers, ""]);
	};

	const editPhoneNumber = (id: number, newPhoneNumberText: string) => {
		setPhonenumbers(
			phonenumbers.map((phone, i) => {
				if (i === id) return newPhoneNumberText;
				return phone;
			})
		);
	};

	const removePhone = (id: number) => {
		setPhonenumbers(phonenumbers.filter((item, i) => i !== id));
	};

	useEffect(() => {
		const numbers = phonenumbers.map((item) => {
			return { phonenumber: item, purpose: "Work" };
		});
		onChange(numbers);
	}, [phonenumbers]);

	return (
		<div style={{ margin: 0 }}>
			{phonenumbers.map((item, index) => {
				console.log(item);
				return (
					<ContactInput
						remove={removePhone}
						onChange={(e) => {
							console.log(e);
							editPhoneNumber(index, e);
						}}
						key={index}
						value={item}
						id={index}
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
const Email = (props: {
	onChange: (emails: Array<{ email: string; purpose: string }>) => void;
}) => {
	const { onChange } = props;
	const [emails, setEmails] = useState([""]);

	const addEmail = () => {
		setEmails([...emails, ""]);
	};

	const removeEmail = (id: number) => {
		setEmails(emails.filter((item, i) => i !== id));
	};

	const editEmail = (id: number, email: string) => {
		setEmails(
			emails.map((phone, i) => {
				if (i === id) return email;
				return phone;
			})
		);
	};

	useEffect(() => {
		const emailsItems = emails.map((item) => {
			return {
				email: item,
				purpose: "Work",
			};
		});
		onChange(emailsItems);
	}, [emails]);

	return (
		<div style={{ margin: "0" }}>
			{emails.map((item, index) => {
				return (
					<ContactInput
						remove={removeEmail}
						onChange={(value) => {
							editEmail(index, value);
						}}
						value={item}
						id={index}
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
const ADD_CONTACT = gql`
	mutation(
		$firstname: String!
		$lastname: String!
		$phonenumbers: [PhoneNumberInput!]!
		$emails: [EmailInput!]!
		$twitterusername: String
	) {
		createContact(
			input: {
				firstname: $firstname
				lastname: $lastname
				phonenumbers: $phonenumbers
				emails: $emails
				twitterusername: $twitterusername
			}
		) {
			contact {
				id
			}
		}
	}
`;

const EDIT_CONTACT = gql`
mutation(
	$id:ID!
	$firstname: String!
	$lastname: String!
	$phonenumbers: [PhoneNumberInput!]!
	$emails: [EmailInput!]!
	$twitterusername: String)
	{
	editContact(
	input:{
		id:$firstname: $firstname
		lastname: $lastname
		phonenumbers: $phonenumbers
		emails: $emails
		twitterusername: $twitterusername
	}){
	  contact{
			id
	  }
	} 
  }
`;

const CreateContactComponent: React.FunctionComponent<IContact> = ({ Name }) => {
	const history = useHistory();

	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [twitterusername, setTwitterusername] = useState("");
	const [emails, setEmails] = useState([] as any[]);
	const [phonenumbers, setPhonenumbers] = useState([] as any[]);

	const [createContact, { loading }] = useMutation(ADD_CONTACT, {
		onCompleted: (data: any) => {
			history.push(`/contactDetails:${data.createContact.contact.id}`);
		},
		onError: (error: any) => {},
		refetchQueries: ["Contacts"],
	});

	return (
		<form className="contact-details">
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
						<ContactInput
							value={firstname}
							type="text"
							placeholder="Firstname"
							onChange={setFirstname}
						/>
					</Col>
					<Col span={12}>
						<ContactInput
							type="text"
							value={lastname}
							placeholder="Lastname"
							onChange={setLastname}
						/>
					</Col>
				</Row>

				<Phone onChange={setPhonenumbers} />

				<Email onChange={setEmails} />

				<div style={{ margin: "1rem 0" }}>
					<ContactInput
						placeholder="Twitter"
						value={twitterusername}
						type="text"
						onChange={setTwitterusername}
					/>
				</div>
			</div>

			<Button
				className="SaveButton"
				type="primary"
				onClick={() => {
					createContact({
						variables: {
							firstname,
							lastname,
							phonenumbers,
							emails,
							twitterusername,
						},
					});
				}}
			>
				Save
			</Button>
		</form>
	);
};
export default CreateContactComponent;
