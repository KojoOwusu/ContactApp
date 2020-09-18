import { gql } from "@apollo/client";

//this file contains all the queries to our graphql api

//query for getting all contacts
export const FETCH_CONTACTS = gql`
	query {
		contacts {
			id
			firstname
		}
	}
`;
export const GET_CONTACT_DETAILS = (id: number) => {
	return gql`
query{
	contact(id:${id}){
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
};
