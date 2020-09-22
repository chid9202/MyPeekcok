import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ChatListScreen from "./src/screens/chatList/ChatListScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1d1d1d",
    opacity: 94,
    alignItems: "center",
    justifyContent: "center",
  },
});
