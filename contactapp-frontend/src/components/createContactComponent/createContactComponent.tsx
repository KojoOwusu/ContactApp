import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Image, Row } from "antd";
import React, { useState, useEffect } from "react";
import UserSvg from "../../assets/svgs/user.svg";
import ContactInput from "../../shared/components/contactInput/ContactInput";
import "./styles.css";
import { gql, useMutation, useLazyQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { getIdFromPath } from "../../helpers/helpers";
import { useLocation } from "react-router-dom";
import { valueFromAST, ValuesOfCorrectTypeRule } from "graphql";

const Phone = (props: {
	onChange: (phoneNumbers: Array<{ phonenumber: string; purpose: string }>) => void;
	value: any[];
}) => {
	const { onChange, value } = props;

	const addPhone = () => {
		const nextValue = { phonenumber: "", purpose: "work" };
		onChange([...value, nextValue]);
	};

	const editPhoneNumber = (id: number, newPhoneNumberText: string) => {
		onChange(
			value.map((val, i) => {
				if (i === id) return { phonenumber: newPhoneNumberText, purpose: val.purpose };
				return val;
			})
		);
	};

	const removePhone = (id: number) => {
		onChange(value.filter((item, i) => i !== id));
	};

	return (
		<div style={{ margin: 0 }}>
			{value.map((item, index) => {
				return (
					<ContactInput
						remove={() => removePhone(index)}
						onChange={(e) => {
							editPhoneNumber(index, e);
						}}
						key={index}
						value={item.phonenumber}
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

const Email = (props: {
	onChange: (emails: Array<{ email: string; purpose: string }>) => void;
	value: any[];
}) => {
	const { onChange, value } = props;

	const addEmail = () => {
		onChange([...value, { email: "", purpose: "" }]);
	};

	const removeEmail = (id: number) => {
		onChange(value.filter((item, i) => i !== id));
	};

	const editEmail = (id: number, email: string) => {
		onChange(
			value.map((val, i) => {
				if (i === id) return { email, purpose: val.purpose };
				return val;
			})
		);
	};

	return (
		<div style={{ margin: "0" }}>
			{value.map((item, index) => {
				return (
					<ContactInput
						remove={() => removeEmail(index)}
						onChange={(value) => {
							editEmail(index, value);
						}}
						value={item.email}
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
		$id: ID!
		$firstname: String!
		$lastname: String!
		$phonenumbers: [PhoneNumberInput!]!
		$emails: [EmailInput!]!
		$twitterusername: String
	) {
		editContact(
			input: {
				id: $id
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

const CreateContactComponent: React.FunctionComponent<IContact> = ({ Name }) => {
	const history = useHistory();
	const { pathname } = useLocation();

	const Query = gql`
		query($id: ID!) {
			contact(id: $id) {
				firstname
				lastname
				phonenumbers {
					phonenumber
					purpose
				}
				emails {
					email
					purpose
				}
				twitterusername
			}
		}
	`;

	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [twitterusername, setTwitterusername] = useState("");
	const [emails, setEmails] = useState<any[]>([{ email: "", purpose: "" }]);
	const [phonenumbers, setPhonenumbers] = useState<any[]>([{ phonenumber: "", purpose: "work" }]);

	const [createContact, AddContactState] = useMutation(ADD_CONTACT, {
		onCompleted: (data: any) => {
			history.push(`/contactDetails:${data.createContact.contact.id}`);
		},
		onError: (error: any) => {},
		refetchQueries: ["Contacts"],
	});

	const [editContact, editContactState] = useMutation(EDIT_CONTACT, {
		onCompleted: (data: any) => {
			history.push(`/contactDetails:${data.editContact.contact.id}`);
		},
		onError: (error: any) => {},
		refetchQueries: ["Contacts"],
	});
	const [getContact, getConstantState] = useLazyQuery(Query, {
		onCompleted: (data: any) => {
			setFirstname(data.contact.firstname);
			setLastname(data.contact.lastname);
			setPhonenumbers(data.contact.phonenumbers);
			setEmails(data.contact.emails);
			setTwitterusername(data.contact.twitterusername);
		},
		onError: (error: any) => {},
	});

	useEffect(() => {
		if (getIdFromPath(pathname)) {
			getContact({ variables: { id: getIdFromPath(pathname) } });
		}
		return () => {};
	}, []);

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

				<Phone onChange={setPhonenumbers} value={phonenumbers} />

				<Email onChange={setEmails} value={emails} />

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
				disabled={!(firstname && lastname && phonenumbers)}
				onClick={() => {
					if (getIdFromPath(pathname)) {
						editContact({
							variables: {
								id: getIdFromPath(pathname),
								firstname,
								lastname,
								phonenumbers,
								emails,
								twitterusername,
							},
						});
					} else {
						createContact({
							variables: {
								firstname,
								lastname,
								phonenumbers,
								emails,
								twitterusername,
							},
						});
					}
				}}
			>
				Save
			</Button>
		</form>
	);
};
export default CreateContactComponent;
