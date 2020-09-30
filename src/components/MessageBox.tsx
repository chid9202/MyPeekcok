import React, { FC } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SystemBlue } from "../themes";

interface MesssageBoxProps {
  messageContent: string;
  messageType: "send" | "receive";
}
const MesssageBox: FC<MesssageBoxProps> = (props) => {
  return (
    <View
      style={[
        styles.wrapper,
        props.messageType === "send"
          ? styles.wrapperSend
          : styles.wrapperReceive,
      ]}
    >
      <View
        style={[
          styles.container,
          props.messageType === "send"
            ? styles.containerSend
            : styles.containerReceive,
        ]}
      >
        <Text style={styles.message}>{props.messageContent}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  wrapperSend: {
    justifyContent: "flex-start",
    paddingLeft: 15,
  },
  wrapperReceive: {
    justifyContent: "flex-end",
    paddingRight: 15,
  },
  container: {
    maxWidth: "78%",
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    marginBottom: 3,
  },
  containerSend: {
    backgroundColor: SystemBlue,
  },
  containerReceive: {
    backgroundColor: "#333333",
  },
  message: {
    color: "#ffffff",
  },
});

export default MesssageBox;
