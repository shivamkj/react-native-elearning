import React, { useEffect} from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {  ScreenContainer, TopHeader, withEmptyState } from "../../components";
import{ defaultStyles} from "../../config";
import Info from "./views/Info";
import { getPaymentHistory } from "../../api/payment";
import useFetch from "../../utils/useFetch";
import PaymentHistory from "../../ShimmerLayouts/PaymentHistory";

const PaymentHistoryScreen = ({ navigation, setEmpty }) => {
  const paymentHistory = useFetch(getPaymentHistory(), [], PaymentHistory);

  useEffect(() => {
    if (paymentHistory == false)
      setEmpty({
        name: "Payment History",
        title: "No Data Available",
        description: "No payment History found.",
      });
  }, [paymentHistory]);

  if (!paymentHistory) return null;
  return (
    <ScreenContainer>
      <TopHeader title="Payment History" onBackPress={navigation.goBack} />
      <FlatList
        data={paymentHistory.data}
        renderItem={DetailsCard}
        keyExtractor={(item) => item.payment_id}
      />
    </ScreenContainer>
  );
};

const DetailsCard = ({ item }) => (
  <View style={[styles.card, defaultStyles.shadowLight]}>
    <Info leftText={item.course} rightText={item.payment_status} bold />
    <Info leftText="Transaction ID" rightText={item.inv_no} />
    <Info leftText="Date" rightText={item.date_time} />
    <Info leftText="Payment Mode" rightText={item.payment_mode} />
    <Info leftText="Coupon Code" rightText={item.coupon_code} />
    <Info leftText="Referral Code" rightText={item.referral_code} />
    <View style={styles.border} />
    <Info leftText="Total" rightText={item.paid_fees} bold />
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginHorizontal: 22,
    marginVertical: 16,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  border: {
    borderWidth: 0.5,
    borderColor: "#00000050",
    marginVertical: 12,
  },
});

export default withEmptyState(PaymentHistoryScreen);
