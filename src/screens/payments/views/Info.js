import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomText as Text } from "../../../components";

const Info = ({ rightText, leftText, bold = false }) => {
  return (
    <View style={styles.info}>
      <Text style={[styles.left, bold && styles.bold]}>{leftText}</Text>
      <Text style={bold && styles.bold}>{rightText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    info: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 7,
    },
    left:{
      flex: 1,
      marginRight: 10,
    },
    bold: {
      fontFamily: "SemiBold-600",
    },
  });

export default Info;
