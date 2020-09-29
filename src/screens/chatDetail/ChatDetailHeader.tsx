import React, { FC } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import IconArrowLeft from "../../assets/IconArrowLeft";

export interface ChatDetailHeaderProp {
  avatar: any;
  contactName: string;
  handlePressGoback: (event: GestureResponderEvent) => void;
}

const ChatDetailHeader: FC<ChatDetailHeaderProp> = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={props.handlePressGoback}
        style={styles.arrowContainer}
      >
        <IconArrowLeft />
      </TouchableOpacity>
      <View style={styles.contactContainer}>
        <Image source={props.avatar} style={styles.avatar} />
        <Text style={{ color: "#ffffff" }}>{props.contactName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    paddingHorizontal: 5,
    width: "100%",
    maxHeight: 84,
    minHeight: 84,
    position: "relative",
    backgroundColor: "#333333FF",
  },
  arrowContainer: {
    position: "absolute",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 84,
  },
  avatar: {
    width: 45,
    height: 45,
    marginBottom: 5,
  },
  contactContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChatDetailHeader;
