import React, { useEffect, useState } from "react";
import "./styles.css";
import UserSvg from "../../assets/svgs/user.svg";
import Phone from "../../assets/svgs/phone.svg";
import { Button, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Twitter from "../../assets/svgs/twitter.svg";
import "antd/dist/antd.css";
import { Link, useLocation, useParams } from "react-router-dom";
import Email from "../../assets/svgs/email.svg";
import { GET_CONTACT_DETAILS } from "../../api/query";
import { useQuery, gql, useMutation } from "@apollo/client";
import { getIdFromPath } from "../../helpers/helpers";
import { useHistory } from "react-router-dom";
import { FETCH_CONTACTS } from "../../api/query";

const renderPhonenumbers = (DataObj: { phonenumber: string; purpose: string }) => {
	return (
		<div className="ContactInfoField">
			<div>{DataObj.phonenumber}</div>
			<div>{DataObj.purpose}</div>
		</div>
	);
};
const renderEmails = (DataObj: { email: string; purpose: string }) => {
	return (
		<div className="ContactInfoField">
			<div>{DataObj.email}</div>
			<div>{DataObj.purpose}</div>
		</div>
	);
};
const deleteHandler = () => {};

const ContactDetailsComponent: React.FC = (props) => {
	const { pathname } = useLocation();
	const history = useHistory();
	//parseInt(id,10)
	//const id = parseInt(subStr, 10);
	const Query = gql`
	query{
		contact(id:${getIdFromPath(pathname)}){
		  firstname
		  lastname
		  phonenumbers{
			phonenumber
			purpose
		  }
		  emails{
			email
			purpose
		  }
		  twitterusername
		}
	  }
	`;

	const DELETE_STRING = gql`
		mutation($userid: ID!) {
			deleteContact(input: { id: $userid }) {
				contacts {
					firstname
				}
			}
		}
	`;

	const queryState = useQuery(Query);
	const [deleteContact, deleteContactState] = useMutation(DELETE_STRING, {
		onCompleted: (data: any) => {
			history.push("/");
		},
		onError: (error: any) => {},
		refetchQueries: ["Contacts"],
	});

	if (deleteContactState.loading || queryState.loading) return <p></p>;
	if (queryState.error) console.log(`Error: ${queryState.error.message}`);

	return (
		/*<NoContactSelectedComponent />*/

		<div className="MainContainer">
			<div className="HeaderArea">
				<img src={UserSvg}></img>

				<span className="ContactName">{`${queryState.data.contact.firstname} ${queryState.data.contact.lastname}`}</span>
				<Link to={`/editContact:${getIdFromPath(pathname)}`}>
					<Button type="link" size="large" className="editButton">
						{" "}
						Edit{" "}
					</Button>
				</Link>
			</div>

			<div className="FieldContainer">
				<div className="iconTextHeader">
					<img src={Phone}></img>
					phonenumber
				</div>

				{queryState.data.contact.phonenumbers.map(
					(item: { phonenumber: string; purpose: string }) => {
						return renderPhonenumbers(item);
					}
				)}
			</div>
			<div className="FieldContainer">
				<div className="iconTextHeader">
					<img src={Email}></img>
					email
				</div>
				{queryState.data.contact.emails.map((item: { email: string; purpose: string }) => {
					return renderEmails(item);
				})}
			</div>
			<div className="FieldContainer">
				<div className="iconTextHeader">
					<img src={Twitter}></img>
					twitter
				</div>
				<div className="ContactInfoFieldTwitter">
					{queryState.data.contact.twitterusername}
				</div>
			</div>
			<Button
				className="deleteButton"
				type="primary"
				danger
				onClick={() => {
					deleteContact({
						variables: {
							userid: getIdFromPath(pathname),
						},
					});
				}}
			>
				DELETE
			</Button>
		</div>
	);
};
export default ContactDetailsComponent;
