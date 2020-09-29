import React, { FC } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import IconArrowLeft from "../../assets/IconArrowLeft";

export interface ChatDetailHeaderProp {
  avatar: any;
  contactName: string;
  handlePressGoback: Function;
}

const ChatDetailHeader: FC<ChatDetailHeaderProp> = (props) => {
  console.log({ props });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Alert.alert("Edit button pressed!")}
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
