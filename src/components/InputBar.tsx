import React, { FC } from "react";
import { View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Input, Icon } from "react-native-elements";
import IconAttach from "../assets/IconAttach";
import { SystemGreen } from "../themes";

interface InputBarProps {}

const InputBar: FC<InputBarProps> = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => Alert.alert("Attach clicked!")}
      >
        <IconAttach />
      </TouchableOpacity>
      <Input
        placeholder="iMessage"
        containerStyle={inputStyles.containerStyle}
        inputContainerStyle={inputStyles.inputContainerStyle}
        inputStyle={inputStyles.inputStyle}
        rightIcon={
          <Icon
            type="font-awesome"
            name="arrow-circle-o-up"
            size={30}
            color={SystemGreen}
            onPress={() => Alert.alert("Send Message!")}
          />
        }
        rightIconContainerStyle={{ padding: 0, margin: 0 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
  },
  iconWrapper: {
    width: 35,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

const inputStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    height: 35,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "#aaaaaa",
    paddingRight: 0,
  },
  inputContainerStyle: {
    height: 35,
    borderBottomWidth: 0,
  },
  inputStyle: {
    color: "#ffffff",
  },
});

export default InputBar;
