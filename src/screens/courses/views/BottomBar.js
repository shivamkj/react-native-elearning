import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContext} from '@react-navigation/native';
import {CustomText as Text, Button} from '../../../components';

const PurchaseBottomBar = ({courseId, discountedFees, fees}) => {
  const navigation = React.useContext(NavigationContext);

  return (
    <>
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.price}>{discountedFees}</Text>
          <Text style={styles.priced}>₹ {fees}</Text>
        </View>
        <Text style={{color: '#6e6969'}}>One time payment</Text>
      </View>
      <Button
        title="Enroll Now"
        style={styles.bottomBtn}
        onPress={() => navigation.navigate('PaymentDetails', {courseId})}
      />
    </>
  );
};

const StudyBottomBar = ({courseId, title}) => {
  const navigation = React.useContext(NavigationContext);

  return (
    <>
      <View>
        <Text style={{color: '#6e6969', paddingTop: 10}}>
          Already Enrolled.
        </Text>
      </View>
      <Button
        title="Start Studying"
        style={styles.bottomBtn}
        onPress={() => navigation.navigate('CourseContent', {courseId, title})}
      />
    </>
  );
};

const styles = StyleSheet.create({
  price: {
    fontFamily: 'Bold-700',
    fontSize: 20,
  },
  bottomBtn: {
    width: '40%',
    padding: 8,
  },
  priced: {
    marginLeft: 12,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
});

export {PurchaseBottomBar, StudyBottomBar};
