import React from "react";
import ChatListScreen from "screens/chatList";
import ChatDetailScreen from "screens/chatDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "screens/screenProps";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import AWSAppSyncClient from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";
// import { graphql } from "@apollo/react-hoc";

const Stack = createStackNavigator<RootStackParamList>();

const client = new AWSAppSyncClient({
  url: appSyncConfig.aws_appsync_graphqlEndpoint,
  region: appSyncConfig.aws_appsync_region,
  auth: {
    type: appSyncConfig.aws_appsync_authenticationType,
    apiKey: appSyncConfig.aws_appsync_apiKey,
  },
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Rehydrated>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Home" component={ChatListScreen}></Stack.Screen>
            <Stack.Screen
              name="Detail"
              component={ChatDetailScreen}
            ></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Rehydrated>
    </ApolloProvider>
  );
}
