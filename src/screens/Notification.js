import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { CustomText as Text, ScreenContainer, TopHeader, withEmptyState } from "../components";

const NotificationScreen = ({ navigation, setEmpty }) => {

  useEffect(() => {
  setEmpty({
      name: "Notification",
      title: "No Notification",
      description: "There is no new notification yet!",
    });
  }, [])
  return (
    <ScreenContainer>
      <TopHeader title="Notification" onBackPress={navigation.goBack} />
    </ScreenContainer>
  );
};

export default withEmptyState(NotificationScreen) ;
