import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button, Checkbox, CustomText as Text, ScreenContainer, TopHeader } from "../../components";
import { Option, Input } from "./views/FeedbackComponents";
import { colors } from "../../config";
import FeedbackPopup from "../../components/FeedbackPopup";

const FeedbackScreen = ({ navigation }) => {
  const [yesNo, setYesNo] = useState(null);

  return (
    <ScreenContainer>
      <TopHeader title="Feedback" onBackPress={navigation.goBack} />
      <ScrollView>
        <FeedbackPopup
          title="Rate your overall learning experience"
          onSelect={(v) => console.log(v)}
        />
        <View style={styles.seprator} />
        <View style={styles.box}>
          <Text>What type of content satisfied you the most?</Text>
          <Text style={styles.smallTxt}>*You can select more than one options</Text>
          <View style={{ flexDirection: "row" }}>
            <Option name="Video" onSelect={(n, v) => console.log(n, v)} />
            <Option name="PDF" onSelect={(n, v) => console.log(n, v)} />
            <Option name="Test" onSelect={(n, v) => console.log(n, v)} />
          </View>
        </View>
        <View style={styles.seprator} />
        <View style={styles.box}>
          <Text style={styles.question}>
            Do you find video Lectures of ESI and FM helpful in prepration?
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.option}>
              <Checkbox state={yesNo == "yes"} onChange={(_) => setYesNo("yes")} />
              <Text style={{ fontSize: 14 }}>Yes</Text>
            </View>
            <View style={styles.option}>
              <Checkbox state={yesNo == "no"} onChange={(_) => setYesNo("no")} />
              <Text style={{ fontSize: 14 }}>No</Text>
            </View>
          </View>
        </View>
        <View style={styles.seprator} />
        <View style={styles.box}>
          <Text style={styles.question}>
            How is your experience with weekly MCQs on General Awareness?
          </Text>
          <Option name="Increase Question" onSelect={(n, v) => console.log(n, v)} />
          <Option name="Make it twice a weel" onSelect={(n, v) => console.log(n, v)} />
          <Input onChange={(value) => console.log(value)} />
        </View>
        <View style={styles.seprator} />
        <View style={styles.box}>
          <Text style={styles.question}>Select an issue(s) you face while watching videos?</Text>
          <Option name="Unable to play video" onSelect={(n, v) => console.log(n, v)} />
          <Option name="Takes too much to load" onSelect={(n, v) => console.log(n, v)} />
          <Option name="Poor video quality" onSelect={(n, v) => console.log(n, v)} />
          <Input onChange={(value) => console.log(value)} />
        </View>
        <View style={styles.seprator} />
        <View style={styles.box}>
          <Text style={styles.question}>Select an issue(s) you face while reading PDFs?</Text>
          <Option name="Unable to access pdf" onSelect={(n, v) => console.log(n, v)} />
          <Option name="Difficult to read" onSelect={(n, v) => console.log(n, v)} />
          <Option name="Takes too much to load" onSelect={(n, v) => console.log(n, v)} />
          <Input onChange={(value) => console.log(value)} />
        </View>
        <View style={styles.seprator} />
        <View style={styles.box}>
          <Text style={styles.question}>Select an issue(s) you face while giving test?</Text>
          <Option name="App crashed while giving test" onSelect={(n, v) => console.log(n, v)} />
          <Option name="Unable to submit test" onSelect={(n, v) => console.log(n, v)} />
          <Option name="Unable to understand test report" onSelect={(n, v) => console.log(n, v)} />
          <Input onChange={(value) => console.log(value)} />
        </View>
        <View style={styles.seprator} />
        <View style={styles.box}>
          <Text style={styles.question}>Select an issue(s) you face while creating notes?</Text>
          <Option name="Unable to create note" onSelect={(n, v) => console.log(n, v)} />
          <Option name="Unable to highlight content" onSelect={(n, v) => console.log(n, v)} />
          <Option name="Difficult to short by date" onSelect={(n, v) => console.log(n, v)} />
          <Input onChange={(value) => console.log(value)} />
        </View>
        <View style={styles.seprator} />
        <View style={styles.box}>
          <Text style={styles.question}>How can we Improve?</Text>
          <View style={styles.improveInput}>
            <TextInput multiline style={{ flex: 1, textAlignVertical: "top" }} />
          </View>
        </View>
        <Button title="SEND" style={{ width: "90%", paddingVertical: 12 }} />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 16,
  },
  seprator: {
    borderWidth: 6,
    borderColor: "#f8f8f8",
  },
  question: {
    marginBottom: 20,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    marginLeft: 16,
  },
  smallTxt: {
    color: "#00000020",
    fontSize: 12,
    marginBottom: 20,
  },
  improveInput: {
    height: 80,
    padding: 10,
    marginTop: 6,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 6,
  },
});

export default FeedbackScreen;
