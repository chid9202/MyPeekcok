import React, { FC, useState } from "react";
import { SafeAreaView, StyleSheet, StatusBar, ClippingRectangle } from "react-native";
import { darkThemeBackground } from "../../themes";
import { RootStackParamList } from "../screenProps";
import { StackScreenProps } from "@react-navigation/stack";
import { Input, Button } from 'react-native-elements';
import { gql, useMutation } from '@apollo/client';

type LoginNavigationProp = StackScreenProps<RootStackParamList, "Login">;


const CREATE_USER = gql`
  mutation createUser {
    createUser(username: $username) {
      id
    }
  }
`
const LoginScreen: FC<LoginNavigationProp> = ({ navigation }) => {
  const [username, setUsername] = useState<string>("")

  const [createUser, {data}] = useMutation(CREATE_USER)

  const onButtonClick = () => {
    console.log('onButtonClick...', username, data)
    createUser({ variables: { username: username}})
  }

  return (
    <SafeAreaView style={styles.container}>
      <Input
        placeholder="Enter Username"
        inputStyle={[styles.inputStyle]}
        inputContainerStyle={[styles.inputContainerStyle]}
        onChange={(event) => setUsername(event.target.value)}
      />  
      <Button 
        title="Start Chat!"
        type="outline"
        raised={true}
        containerStyle={{ marginTop: 8 }}
        buttonStyle={{backgroundColor: darkThemeBackground}}
        onPress={onButtonClick}
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
