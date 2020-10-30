import React, { FC } from "react";
import { SafeAreaView, FlatList, StyleSheet, StatusBar } from "react-native";
import SearchBar from "../../components/SearchBar";
import { darkThemeBackground } from "../../themes";
import ChatListHeader from "./ChatListHeader";
import MessageList, { MessageListInterface } from "../../mocks/MessageListMock";
import ChatItem from "./ChatItem";
import { RootStackParamList } from "../screenProps";
import { StackScreenProps } from "@react-navigation/stack";

type HomeScreenNavigationProp = StackScreenProps<RootStackParamList, "Home">;

const ChatListScreen: FC<HomeScreenNavigationProp> = ({ navigation }) => {
  const [search, setSearch] = React.useState("");

  const handlePressChatItem = () => {
    navigation.push("Detail");
  };

  const renderItem = ({ item }: { item: MessageListInterface }) => (
    <ChatItem
      contactName={item.contactName}
      avatar={item.avatar}
      date={item.date}
      message={item.message}
      isRead={item.isRead}
      handlePress={handlePressChatItem}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <ChatListHeader />
      <SearchBar 
        placeholder="Search" 
        onChangeText={setSearch} value={search}/>
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

export default ChatListScreen;
