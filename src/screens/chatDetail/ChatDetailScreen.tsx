import React, { FC } from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  ScrollView,
} from "react-native";
import { darkThemeBackground } from "../../themes";
import MESSAGE_THREAD, {
  MessageThreadInterface,
} from "../../mocks/MessageThreadMock";
import ChatDetailHeader from "./ChatDetailHeader";
import { RootStackParamList } from "../screenProps";
import { StackScreenProps } from "@react-navigation/stack";
import MesssageBox from "../../components/MessageBox";

type DetailScreenNavigationProp = StackScreenProps<RootStackParamList, "Home">;

const ChatDetailScreen: FC<DetailScreenNavigationProp> = ({ navigation }) => {
  const messageThread: MessageThreadInterface = MESSAGE_THREAD;

  return (
    <SafeAreaView style={styles.container}>
      <ChatDetailHeader
        avatar={messageThread.avatar}
        contactName={messageThread.contactName}
        handlePressGoback={() => navigation.goBack()}
      />
      <ScrollView>
        {messageThread.thread.map(({ date, message, type }) => (
          <MesssageBox messageContent={message} messageType={type} />
        ))}
      </ScrollView>
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
});

export default ChatDetailScreen;
