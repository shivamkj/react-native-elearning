import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomText as Text, TextInput } from "../../../components";
import { NotVisible, Visible } from "../../../assets/icons";
import { colors } from "../../../config";

const PasswordInput = ({ error, ...otherProps }) => {
  const [hidden, setHidden] = React.useState(true);

  const changehidden = () => setHidden((prev) => !prev);

  return (
    <>
      {error && <Text style={styles.errotText}>{error}</Text>}
      <View style={styles.inputContainer}>
        <TextInput widths="90%" secureTextEntry={hidden} {...otherProps} />
        <View style={{marginRight: 10}}>
        {hidden ? <NotVisible onPress={changehidden} /> : <Visible onPress={changehidden} />}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.sectionBackground,
    borderRadius: 4,
    justifyContent: "space-between",
  },
  errotText: {
    fontFamily: "SemiBold-600",
    fontSize: 13,
    color: colors.redAccent,
  },
});

export default PasswordInput;
