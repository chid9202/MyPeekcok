import React from "react";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";
import SearchBar from "../../components/SearchBar";

import ChatListHeader from "./ChatListHeader";
import MessageList from "../../mocks/MessageList";
import ChatItem, { ChatItemProps } from "./ChatItem";

const ChatListScreen = () => {
  const [search, setSearch] = React.useState("");

  const renderItem = ({ item }: { item: ChatItemProps }) => (
    <ChatItem
      contactName={item.contactName}
      avatar={item.avatar}
      date={item.date}
      message={item.message}
      isRead={item.isRead}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ChatListHeader />
      <SearchBar placeholder="Search" onChangeText={setSearch} value={search} />
      <FlatList
        data={MessageList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    width: "100%",
  },
  section: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    minHeight: 75,
    paddingHorizontal: 20,
  },
});

export default ChatListScreen;
