import React, {useEffect, useState, useRef} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {
  Button,
  CustomText as Text,
  ScreenContainer,
  TopHeader,
  TextInput,
} from '../../components';
import useFetch from '../../utils/useFetch';
import defaultStyles from '../../config/styles';
import Info from './views/Info';
import {getPurchaseDetails} from '../../api/visitors';
import Profile from './views/Profile';
import {checkCoupon} from '../../api/payment';
import {showToast} from '../../utils/functions';
// import Checkbox from '../../components/Checkbox';

// Setup for multiple payment options commented

const PaymentDetailsScreen = ({navigation, route: {params}}) => {
  // const [paymentOption, setPaymentOption] = useState(null);
  const details = useFetch(getPurchaseDetails(params.courseId));
  const [couponDiscount, setCouponDiscount] = useState(0);
  const couponCode = useRef('');

  const applyCoupon = () => {
    if (couponDiscount > 0) {
      setCouponDiscount(0);
      return;
    }
    if (couponCode.current == '') {
      setCouponDiscount(0);
      return;
    }
    checkCoupon(couponCode.current, params.courseId).then(result => {
      if (result.data.response == 100) {
        const discountPercent = parseInt(result.data.discount_percent);
        const courseFees = details.data.course_fees;
        const discount = (courseFees * discountPercent) / 100;
        setCouponDiscount(discount);
        console.log(result.data.discount_percent);
        showToast('Coupon Code applied');
      } else {
        setCouponDiscount(0);
        showToast('Invalid Coupon Code');
      }
    });
  };

  const toIntamojoPayment = () =>
    navigation.navigate('InstamojoPayment', {
      courseId: params.courseId,
      coupon: couponDiscount > 0 ? couponCode.current : undefined,
    });

  const getPrice = () => {
    const discount =
      (details.data.course_fees * details.data.discount_perc) / 100;
    console.log('dis' + discount);
    console.log('cd', couponDiscount);
    return details.data.course_fees - (discount + couponDiscount);
  };

  const getDiscount = () => {
    return (details.data.course_fees * details.data.discount_perc) / 100;
  };

  if (!details) return null;
  return (
    <ScreenContainer>
      <TopHeader title="Summary" onBackPress={navigation.goBack} />
      <ScrollView contentContainerStyle={{marginHorizontal: 16}}>
        <View style={styles.courseDetails}>
          <Image
            source={{uri: details.data.course_image}}
            resizeMode="stretch"
            style={styles.courseImage}
          />
          <View style={{marginLeft: 10}}>
            <Text style={styles.courseName}>{details.data.course_title}</Text>
          </View>
        </View>
        <View style={[defaultStyles.border, {marginVertical: 16}]} />
        <Text style={styles.heading}>Billed to</Text>
        <Profile />
        <View style={[defaultStyles.border, {marginVertical: 16}]} />
        <Text style={styles.heading}>Payment Details</Text>
        <Info
          leftText="Date"
          rightText={new Date().toJSON().slice(0, 10).replace(/-/g, '- ')}
        />
        <Info leftText="Amount" rightText={'₹ ' + details.data.course_fees} />
        <Info leftText="Discount" rightText={`- ₹ ${getDiscount()}`} />
        <Info leftText="Applied Coupon" rightText={`- ₹ ${couponDiscount}`} />

        <View style={styles.couponContainer}>
          <Text>Coupon Code</Text>
          <Text
            style={{color: couponDiscount == 0 ? '#0150B5' : '#EA3323'}}
            onPress={applyCoupon}>
            {couponDiscount == 0 ? 'Apply' : 'Remove'}
          </Text>
        </View>
        <TextInput
          style={{padding: 3, width: '100%'}}
          onChangeText={v => (couponCode.current = v)}
        />
        <View style={[defaultStyles.border, {marginVertical: 16}]} />
        <Info leftText="Total" rightText={'₹ ' + getPrice()} bold />
        <View style={[defaultStyles.border, {marginVertical: 16}]} />
        {/* <Text style={styles.heading}>Select Payment Option</Text>
        {paymentOptions.map((item, index) => (
          <View style={styles.payContainer} key={index}>
            <Checkbox
              state={paymentOption == index}
              onChange={() => selectPaymentOption(index)}
            />
            <Image
              style={item.imageDimensions}
              resizeMode="contain"
              source={item.image}
            />
          </View>
        ))} */}
      </ScrollView>
      <Button
        title={'PAY ₹ ' + getPrice()}
        style={{borderRadius: 0}}
        onPress={toIntamojoPayment}
      />
    </ScreenContainer>
  );
};

// const paymentOptions = [
//   {
//     name: 'Razorpay',
//     image: require('../../assets/Razorpay.png'),
//     imageDimensions: {width: 180, height: 40},
//   },
//   {
//     name: 'Paytm',
//     image: require('../../assets/Paytm.png'),
//     imageDimensions: {width: 110, height: 40},
//   },
//   {
//     name: 'Instamojo',
//     image: require('../../assets/Instamojo.png'),
//     imageDimensions: {width: 180, height: 40},
//   },
// ];

const styles = StyleSheet.create({
  container: {
    margin: 12,
  },
  courseDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  courseImage: {
    width: 120,
    height: 80,
    borderRadius: 12,
  },
  courseName: {
    width: '50%',
    fontSize: 18,
    fontFamily: 'Medium-500',
  },
  enrollment: {
    fontSize: 14,
  },
  heading: {
    fontFamily: 'Bold-700',
    marginBottom: 10,
  },
  payContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  couponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default PaymentDetailsScreen;
