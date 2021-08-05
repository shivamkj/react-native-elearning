import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Checkbox, CustomText as Text } from "../../../components";
import { colors } from "../../../config";

const Option = ({ name, onSelect }) => {
  const [isSelected, setSelected] = useState(false);
  const handleSelect = (state) => {
    setSelected(state);
    onSelect(name, state);
  };
  return (
    <View style={styles.option}>
      <Checkbox state={isSelected} onChange={handleSelect} />
      <Text style={styles.optionText}>{name}</Text>
    </View>
  );
};

const Input = ({ onChange }) => (
  <View style={styles.inputBorder}>
    <TextInput placeholder="Help us to know more about it." onChangeText={onChange} />
  </View>
);
const styles = StyleSheet.create({
  inputBorder: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginLeft: 16,
  },
  optionText: {
    fontSize: 14,
  },
});

export { Option, Input };
