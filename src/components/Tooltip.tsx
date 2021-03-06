import { bool } from 'aws-sdk/clients/redshiftdata';
import React, {useState} from 'react'
import { View, StyleSheet, Text, Alert, TouchableOpacity } from "react-native";


interface Props {
  isActive: bool,
  tooltipContent: React.ReactNode,
  children: React.ReactNode
}
const Tooltip = (props: Props) => {
  return (
    <View style={styles.container}>
      { props.children }
      <View style={[styles.tooltipContainer, props.isActive ? {display: "flex"} : {display: "none"}]}>
          { props.tooltipContent }
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    position: "relative",
    zIndex: 0
  },
  tooltipContainer: {
    position: "absolute",
    backgroundColor: '#666666',
    color: "white",
    top: 30,
    borderRadius: 5,
    zIndex: 1
  },
})
export default Tooltip