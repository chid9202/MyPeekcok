import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { SearchBar as RNESearchBar } from "react-native-elements";
import { darkThemeBackground } from "../themes";

interface Props {
  onChangeText: Function;
  placeholder?: string;
  value: string;
}
const SearchBar: FC<Props> = (props) => {
  return (
    <RNESearchBar
      placeholder={props.placeholder}
      onChangeText={(e) => props.onChangeText(e)}
      value={props.value}
      containerStyle={styles.searchContainerStyle}
    />
  );
};

const styles = StyleSheet.create({
  searchContainerStyle: {
    backgroundColor: darkThemeBackground,
  },
});
SearchBar.defaultProps = {
  placeholder: "Search",
  onChangeText: Function(),
};

export default SearchBar;
