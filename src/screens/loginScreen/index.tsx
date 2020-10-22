import React, { FC } from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { darkThemeBackground } from "../../themes";
import { RootStackParamList } from "../screenProps";
import { StackScreenProps } from "@react-navigation/stack";
import { Input, Button } from 'react-native-elements';


type LoginNavigationProp = StackScreenProps<RootStackParamList, "Home">;

const LoginScreen: FC<LoginNavigationProp> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Input
        placeholder="Enter Username"
        inputStyle={styles.inputStyle}
        inputContainerStyle={styles.inputContainerStyle}
      />  
      <Button 
        title="Start Chat!"
        type="outline"
        raised={true}
        containerStyle={{ marginTop: 8 }}
        buttonStyle={{backgroundColor: darkThemeBackground}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: darkThemeBackground,
    justifyContent: "center",
  },
  inputStyle: {
    paddingLeft: 15,
    color: "#a2a2a2"
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: "#a2a2a2",
    borderRadius: 1,
  },
});

export default LoginScreen;
