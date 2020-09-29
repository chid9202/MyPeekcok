import React, { FC } from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { darkThemeBackground } from "../../themes";
import MESSAGE_THREAD, {
  MessageThreadInterface,
} from "../../mocks/MessageThreadMock";
import ChatDetailHeader from "./ChatDetailHeader";
import { RootStackParamList } from "../screenProps";
import { StackScreenProps } from "@react-navigation/stack";

type DetailScreenNavigationProp = StackScreenProps<RootStackParamList, "Home">;

const ChatDetailScreen: FC<DetailScreenNavigationProp> = ({ navigation }) => {
  const messageThread: MessageThreadInterface = MESSAGE_THREAD;
  console.log({ messageThread });
  return (
    <SafeAreaView style={styles.container}>
      <ChatDetailHeader
        avatar={messageThread.avatar}
        contactName={messageThread.contactName}
        handlePressGoback={() => navigation.goBack()}
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
});

export default ChatDetailScreen;
