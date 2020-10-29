import React from "react";
import LoginScreen from "screens/loginScreen";
import ChatListScreen from "screens/chatList";
import ChatDetailScreen from "screens/chatDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "screens/screenProps";
import { AppRegistry } from 'react-native';
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import { Rehydrated } from "aws-appsync-react";
// import { ApolloProvider } from '@apollo/client';
import awsmobile from './aws-exports';
import Amplify, { Auth } from 'aws-amplify'
import { ApolloProvider } from '@apollo/react-hooks';


const client = new AWSAppSyncClient({
  url: awsmobile.aws_appsync_graphqlEndpoint,
  region: awsmobile.aws_appsync_region,
  auth: {
    // type: awsmobile.aws_appsync_authenticationType,
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    // type: 'AMAZON_COGNITO_USER_POOLS',
    // apiKey: awsmobile.aws_appsync_apiKey,
    jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
});
Amplify.configure(awsmobile)

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={ChatListScreen} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen name="Detail" component={ChatDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const AppWithProvider = () => (
  <ApolloProvider client={client}>
    {/* <Rehydrated> */}
      <App />
    {/* </Rehydrated> */}
  </ApolloProvider>
);

export default AppWithProvider;
AppRegistry.registerComponent('MyPeekcok', () => AppWithProvider);

