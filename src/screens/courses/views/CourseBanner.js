import React from "react";
import { View, Image, StyleSheet } from "react-native";
import ImageBackground from "../../../assets/ImageBackground";
import { BackArrow } from "../../../assets/icons";
import { CustomText as Text } from "../../../components";

const CourseBanner = ({ imageUri, courseName, goBack }) => (
  <View>
    <ImageBackground />
    <Image
      style={styles.headerImage}
      resizeMode="stretch"
      source={{ uri: imageUri }}
    />
    <BackArrow style={styles.backArrow} color="#ffffff" onPress={goBack} />
    <Text style={styles.courseName} numberOfLines={1}>
      {courseName}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  headerImage: {
    width: "100%",
    height: 220,
  },
  courseName: {
    position: "absolute",
    bottom: 0,
    color: "#fff",
    fontFamily: "Bold-700",
    fontSize: 22,
    margin: 16,
    zIndex: 99,
  },
  backArrow: {
    position: "absolute",
    top: 14,
    left: 14,
    zIndex: 99,
  },
});

export default CourseBanner;
