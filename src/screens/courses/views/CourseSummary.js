import React from "react";
import { StyleSheet } from "react-native";
import { CustomText as Text } from "../../../components";
import { colors } from "../../../config";

const CourseSummary = ({ heading, summaryPoints }) => (
  <>
    <Text style={styles.title}>{heading}</Text>
    <Text style={styles.summaryPoints}>Course Type: {summaryPoints.course_type}</Text>
    <Text style={styles.summaryPoints}>Language: {summaryPoints.course_language}</Text>
    <Text style={styles.summaryPoints}>Published Date: {summaryPoints.course_publish_date}</Text>
    <Text style={styles.summaryPoints}>Course Duration: {summaryPoints.course_duration}</Text>
  </>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: "SemiBold-600",
    marginBottom: 6,
  },
  summaryPoints: {
    color: colors.subText,
    fontSize: 15,
  },
});

export default CourseSummary;
