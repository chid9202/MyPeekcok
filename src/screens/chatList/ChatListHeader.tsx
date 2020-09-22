import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import { SystemBlue } from "../../themes";
import WriteIcon from "../../assets/IconWrite";

const ChatListHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Alert.alert("Edit button pressed!")}>
        <Text style={styles.editButton}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Alert.alert("Edit button pressed!")}>
        <WriteIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    maxHeight: 42,
  },
  editButton: {
    color: SystemBlue,
    fontSize: 17,
  },
});

export default ChatListHeader;
