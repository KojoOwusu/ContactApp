import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { Constants as C } from "../shared/constants/constants";

//Apollo cient for handling all requests to graphql api
const link = createHttpLink({ uri: "https://safe-earth-99320.herokuapp.com/graphql" });

export const client = new ApolloClient({
	link: link,
	cache: new InMemoryCache(),
	name: "contactapp-web-client",
});
