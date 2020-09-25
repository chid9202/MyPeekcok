import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
} from "react-native";

import ChatListHeader from "./ChatListHeader";
import IconArrowRight from "../../assets/IconArrowRight";
import MessageList from "../../mocks/MessageList";
const ChatListScreen = () => {
  const Item = ({
    contactName,
    avatar,
    date,
    message,
  }: {
    contactName: string;
    avatar: any;
    date: string;
    message?: string;
  }) => (
    <View style={styles.section}>
      <View style={styles.avatarColumn}>
        <Image source={avatar} style={styles.avatarImage} />
      </View>
      <View style={styles.contentColumn}>
        <View style={styles.messageHeader}>
          <Text style={styles.contactName}>{contactName}</Text>
          <Text style={styles.date}>{date}</Text>
          <IconArrowRight />
        </View>
        <View style={styles.messageContent}>
          <Text style={styles.message} numberOfLines={2}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderItem = ({
    item,
  }: {
    item: { contactName: string; avatar: any; date: string; message: string };
  }) => (
    <Item
      contactName={item.contactName}
      avatar={item.avatar}
      date={item.date}
      message={item.message}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ChatListHeader />
      <SearchBar />
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
  avatarColumn: {
    flex: 0,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 45,
    marginRight: 10,
  },
  avatarImage: {
    width: 45,
    height: 45,
  },
  contentColumn: {
    flex: 1,
    flexDirection: "column",
    borderTopColor: "#292929",
    borderTopWidth: 1,
    paddingVertical: 8,
  },
  messageHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  contactName: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    color: "#ffffff",
  },
  date: {
    fontSize: 15,
    color: "#999999",
    marginRight: 10,
  },
  messageContent: {},
  message: {
    fontSize: 15,
    color: "#999999",
  },
});

export default ChatListScreen;
