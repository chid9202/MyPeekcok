import React, { FC } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from "react-native";

import IconArrowRight from "../../assets/IconArrowRight";
import { Icon } from "react-native-elements";
import { SystemBlue } from "../../themes";

export interface ChatItemProps {
  contactName: string;
  avatar: any;
  date: string;
  message: string;
  isRead: boolean;
  handlePress: (event: GestureResponderEvent) => void;
}
const ChatItem: FC<ChatItemProps> = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.handlePress}>
      <View style={styles.section}>
        <View style={styles.avatarColumn}>
          {!!!props.isRead && (
            <Icon
              type="font-awesome"
              name="circle"
              color={SystemBlue}
              size={10}
            />
          )}
          <Image source={props.avatar} style={styles.avatarImage} />
        </View>
        <View style={styles.contentColumn}>
          <View style={styles.messageHeader}>
            <Text style={styles.contactName}>{props.contactName}</Text>
            <Text style={styles.date}>{props.date}</Text>
            <IconArrowRight />
          </View>
          <View style={styles.messageContent}>
            <Text style={styles.message} numberOfLines={2}>
              {props.message}
            </Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

ChatItem.defaultProps = {
  isRead: false,
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    minHeight: 75,
    paddingHorizontal: 20,
  },
  avatarColumn: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    flex: 0,
    alignItems: "center",
    justifyContent: "flex-end",
    minWidth: 65,
    marginRight: 10,
  },
  avatarImage: {
    width: 45,
    height: 45,
    marginLeft: 5,
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

export default ChatItem;
