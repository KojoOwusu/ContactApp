import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Constants as C } from "../shared/constants/constants";

export const client = new ApolloClient({
	uri: C.GRAPHQL_API_ENDPOINT,
	cache: new InMemoryCache(),
});
