import React from "react";
import { View, StyleSheet } from "react-native";
import { CustomText as Text } from "../../../components";
import { Video, Pdf, MockTest, News, BackArrow } from "../../../assets/icons";

const features = [
  { name: "PDFs", icon: <Pdf size={24} /> },
  { name: "Video", icon: <Video size={24} /> },
  { name: "Tests", icon: <MockTest size={24} /> },
  { name: "News", icon: <News size={24} /> },
];

const CourseFeatures = () => (
  <View style={styles.container}>
    {features.map((element, index) => (
      <View key={index} style={styles.feature}>
        {element.icon}
        <Text style={styles.name}>{element.name}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  feature: { alignItems: "center" },
  name: {
    fontFamily: "SemiBold-600",
    fontSize: 13,
  },
});

export default CourseFeatures;
