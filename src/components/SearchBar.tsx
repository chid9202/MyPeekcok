import React, { FC } from "react";
import { ClippingRectangle, StyleSheet } from "react-native";
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
      platform="ios"
      placeholder={props.placeholder}
      onChangeText={(e) => props.onChangeText(e)}
      value={props.value}
      containerStyle={searchContainerStyle}
    />
  );
};

const searchContainerStyle = {
  backgroundColor: darkThemeBackground,
};

SearchBar.defaultProps = {
  placeholder: "Search",
  onChangeText: Function(),
};

export default SearchBar;
