import React from "react";
import ChatListScreen from "./src/screens/chatList/ChatListScreen";
import ChatDetailScreen from "./src/screens/chatDetail/ChatDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./src/screens/screenProps";

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
