import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, Alert, TouchableOpacity } from "react-native";
import { SystemBlue } from "../../themes";
import WriteIcon from "../../assets/IconWrite";
import Tooltip from '../../components/Tooltip'

const ChatListHeader = () => {
  const [isEditTooltip, setIsEditTooltip] = useState(true)
  const renderTooltip = () => {
    return (
      <View style={styles.tooltip}>
        test...
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.interactiveHeader}>
        <Tooltip isActive={isEditTooltip} tooltipContent={renderTooltip()}>
          <TouchableOpacity onPress={() => Alert.alert("Write button pressed!")}>
            <Text style={styles.editButton}>Edit</Text>
          </TouchableOpacity>
        </Tooltip>
        <TouchableOpacity onPress={() => Alert.alert("Write button pressed!")}>
          <WriteIcon />
        </TouchableOpacity>
      </View>
      <Text style={styles.pageTitle}>Messages</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "nowrap",
    paddingHorizontal: 20,
    width: "100%",
    maxHeight: 84,
    minHeight: 84,
    marginBottom: 5,
  },
  interactiveHeader: {
    height: 42,
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editButton: {
    color: SystemBlue,
    fontSize: 17,
  },
  pageTitle: {
    width: "100%",
    height: 42,
    fontSize: 40,
    fontWeight: "bold",
    lineHeight: 41,
    letterSpacing: 0.374,
    color: "#ffffff",
  },
  tooltip: {

  }
});

export default ChatListHeader;
