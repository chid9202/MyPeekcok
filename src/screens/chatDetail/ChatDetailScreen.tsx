import React from "react";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";
import SearchBar from "../../components/SearchBar";
import { darkThemeBackground } from "../../themes";
import ChatListHeader from "./ChatListHeader";
import MessageList from "../../mocks/MessageList";
import ChatItem, { ChatItemProps } from "./ChatItem";

const ChatDetailScreen = () => {
  return <SafeAreaView style={styles.container}>dfdfdfdfdf</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
    backgroundColor: darkThemeBackground,
  },
  section: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    minHeight: 75,
    paddingHorizontal: 20,
  },
});

export default ChatDetailScreen;
