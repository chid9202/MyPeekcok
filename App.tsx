import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import ChatListScreen from "./src/screens/chatList/ChatListScreen";
import { darkThemeBackground } from "./src/themes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ChatListScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: darkThemeBackground,
    opacity: 94,
    alignItems: "center",
    justifyContent: "center",
  },
});
