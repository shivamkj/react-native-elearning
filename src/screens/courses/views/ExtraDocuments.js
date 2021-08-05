import React from "react";
import { View, Linking, StyleSheet } from "react-native";
import { Pdf, Download } from "../../../assets/icons";
import { CustomText as Text } from "../../../components";
import { defaultStyles } from "../../../config";

const ExtraDocuments = ({ documents, courseTitle }) => {
  if (!documents.length) return <View></View>;

  return documents.map((item) => (
    <View key={item.id}>
      <View style={[defaultStyles.border, { marginTop: 15 }]} />
      <Text style={styles.docTitle}>{item.title}</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.pdfIcon}>
          <Pdf size={30} />
        </View>
        <Text style={styles.docName} numberOfLines={2}>
          {`${courseTitle} ${item.title}`}
        </Text>
        <View style={styles.download}>
          <Download onPress={() => showDocument(item.link)} />
        </View>
      </View>
    </View>
  ));
};

const showDocument = (link) => {
  Linking.openURL(link).catch((err) => console.error("Couldn't load page", err));
};

const styles = StyleSheet.create({
  docTitle: {
    fontFamily: "SemiBold-600",
    marginTop: 10,
    marginBottom: 6,
  },
  pdfIcon: {
    padding: 10,
    marginRight: 6,
    backgroundColor: "#F5F5F5",
    borderWidth: 1,
    borderColor: "#D8D8D8",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    margin: 6,
  },
  docName: {
    flex: 2,
    margin: 6,
  },
  download: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
});

export default ExtraDocuments;
