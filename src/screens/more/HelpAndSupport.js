import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomText as Text, ScreenContainer, TopHeader} from '../../components';
import Email from '../../assets/icons/Email';
import Phone from '../../assets/icons/Phone';
import {getSupportDetails} from '../../api/visitors';
import {defaultStyles} from '../../config';
import useFetch from '../../utils/useFetch';

const HelpAndSupport = ({navigation}) => {
  const supportDetails = useFetch(getSupportDetails());

  if (!supportDetails) return null;
  return (
    <ScreenContainer>
      <TopHeader title="Help & Support" onBackPress={navigation.goBack} />
      <View style={styles.container}>
        <Text style={styles.detailBold}>{supportDetails.message_new[0]}</Text>
        {supportDetails.message_new.map((message, index) => {
          if (index == 0) return;
          return <Text style={styles.detail}>{message}</Text>;
        })}
        <View style={[defaultStyles.border, {marginVertical: 20}]} />
        <View style={styles.info}>
          <Phone />
          <Text style={styles.infoText}>
            {supportDetails.mobile_new.join(', ')}
          </Text>
        </View>
        <View style={styles.info}>
          <Email />
          <Text style={styles.infoText}>{supportDetails.email}</Text>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
  },
  detail: {
    fontSize: 18,
    color: '#00000080',
  },
  detailBold: {
    fontSize: 18,
    fontFamily: 'SemiBold-600',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  infoText: {
    fontSize: 18,
    fontFamily: 'Medium-500',
    marginLeft: 24,
  },
});

export default HelpAndSupport;
