import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Button,
  CustomText as Text,
  ScreenContainer,
  TopHeader,
} from '../../components';
import {CommonActions} from '@react-navigation/native';

const PaymentStatusScreen = ({navigation, route: {params}}) => {
  return (
    <ScreenContainer>
      <TopHeader title="Payment Status" onBackPress={navigation.goBack} />
      <View style={styles.container}>
        {isPaymentSuccessful(params.paymentStatus) ? (
          <SuccessMessage navigation={navigation} />
        ) : (
          <FailureMessage navigation={navigation} />
        )}
      </View>
    </ScreenContainer>
  );
};

const SuccessMessage = ({navigation}) => {
  const toExploreScreen = () =>
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );

  return (
    <View style={{maxWidth: '80%'}}>
      <Text style={styles.heading}>Congratulations!</Text>
      <Text style={styles.message}>
        Your payment is completed successfully.
      </Text>
      <Text style={[styles.message, {marginTop: 10}]}>
        We have successfully received your payment. It may take couple of hours
        to activate your course completely. All the Best!
      </Text>
      <Button
        title="Go to Home"
        style={styles.button}
        onPress={toExploreScreen}
      />
    </View>
  );
};

const FailureMessage = ({navigation}) => (
  <View>
    <Text style={styles.heading}>Sorry!</Text>
    <Text style={styles.message}>
      Some error occured while processing your payment. Please try again later.
    </Text>
    <Button
      title="Try Again"
      style={styles.button}
      onPress={navigation.goBack}
    />
  </View>
);

const isPaymentSuccessful = (paymentStatus) => {
  if (paymentStatus == 'Credit') return true;
  else if (paymentStatus == 'Failed') return false;
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: '75%',
  },
  heading: {
    fontFamily: 'Bold-700',
    fontSize: 24,
    textAlign: 'center',
  },
  message: {
    fontFamily: 'SemiBold-600',
    fontSize: 14,
    marginTop: 30,
    textAlign: 'center',
  },
  button: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 60,
  },
});

export default PaymentStatusScreen;
