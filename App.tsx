import React from "react";
import ChatListScreen from "screens/chatList";
import ChatDetailScreen from "screens/chatDetail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "screens/screenProps";
import { ApolloProvider } from "@apollo/client";
import { graphql } from "@apollo/react-hoc";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={ChatListScreen}></Stack.Screen>
        <Stack.Screen name="Detail" component={ChatDetailScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
