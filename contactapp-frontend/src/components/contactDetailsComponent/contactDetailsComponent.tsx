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
	const { loading, error, data } = useQuery(Query);
	if (loading) return <p></p>;
	if (error) console.log(`Error: ${error.message}`);

	return (
		/*<NoContactSelectedComponent />*/

		<div className="MainContainer">
			<div className="HeaderArea">
				<img src={UserSvg}></img>

				<span className="ContactName">{`${data.contact.firstname} ${data.contact.lastname}`}</span>
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
					phonenumber
				</div>

				{data.contact.phonenumbers.map((item: { phonenumber: string; purpose: string }) => {
					return renderPhonenumbers(item);
				})}
			</div>
			<div className="FieldContainer">
				<div className="iconTextHeader">
					<img src={Email}></img>
					email
				</div>
				{data.contact.emails.map((item: { email: string; purpose: string }) => {
					return renderEmails(item);
				})}
			</div>
			<div className="FieldContainer">
				<div className="iconTextHeader">
					<img src={Twitter}></img>
					twitter
				</div>
				<div className="ContactInfoField">{data.contact.twitterusername}</div>
			</div>
			<Button className="deleteButton" type="primary" danger onClick={deleteHandler}>
				DELETE
			</Button>
		</div>
	);
};
export default ContactDetailsComponent;
