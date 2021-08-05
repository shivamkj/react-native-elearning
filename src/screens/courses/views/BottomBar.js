import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomText as Text, Button} from '../../../components';

const PurchaseBottomBar = ({courseId, navigation}) => (
  <>
    <View>
      <Text style={styles.price}>₹ {1344}</Text>
      <Text style={{color: '#6e6969'}}>One time payment</Text>
    </View>
    <Button
      title="Enroll Now"
      style={styles.bottomBtn}
      onPress={() => navigation.navigate('PaymentDetails', {courseId})}
    />
  </>
);

const StudyBottomBar = ({courseId, title, navigation}) => (
  <>
    <View>
      <Text style={{color: '#6e6969', paddingTop: 10}}>Already Enrolled.</Text>
    </View>
    <Button
      title="Start Studying"
      style={styles.bottomBtn}
      onPress={() => navigation.navigate('CourseContent', {courseId, title})}
    />
  </>
);

const styles = StyleSheet.create({
  price: {
    fontFamily: 'Bold-700',
    fontSize: 20,
  },
  bottomBtn: {
    width: '40%',
    padding: 8,
  },
});

export {PurchaseBottomBar, StudyBottomBar};
