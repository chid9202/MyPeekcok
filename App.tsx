import React from "react";
import ChatListScreen from "./src/screens/chatList/ChatListScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ChatListScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
