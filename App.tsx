import React from "react";
import LoginScreen from "screens/loginScreen";
import ChatListScreen from "screens/chatList";
import ChatDetailScreen from "screens/chatDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "screens/screenProps";
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";
import appSyncConfig from "./aws-exports";
import { graphql, ApolloProvider, compose } from "react-apollo";

const Stack = createStackNavigator<RootStackParamList>();

const client = new AWSAppSyncClient({
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,
  auth: {
    type: appSyncConfig.aws_appsync_authenticationType,
    apiKey: appSyncConfig.aws_appsync_apiKey,
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={ChatListScreen} />
        <Stack.Screen name="Detail" component={ChatDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const WithProvider = () => (
  <ApolloProvider client={client}>
    {/* <Rehydrated> */}
    <App />
    {/* </Rehydrated> */}
  </ApolloProvider>
);

export default WithProvider;
