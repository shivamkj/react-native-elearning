import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ScreenContainer,
  CustomText as Text,
  TopHeader,
  Button,
  LoadingIndicator,
  TextInput,
} from '../../components';
import {checkEmail} from '../../api/auth';
import {useGlobalContext} from '../../utils/globalContext';
import {isValidEmail, showToast} from '../../utils/functions';

const RegisterationScreen = ({navigation}) => {
  const email = useRef('');
  const mobile = useRef('');

  const {dispatch} = useGlobalContext();

  const onSubmit = async () => {
    if (mobile.current.length != 10) {
      showToast('Please Enter Correct Mobile Number without +91 or 0');
      return;
    }
    if (!isValidEmail(email.current)) {
      showToast('Please Enter Correct Email ID');
      return;
    }
    try {
      dispatch({type: 'loading', payload: LoadingIndicator});
      const {data} = await checkEmail(email.current, mobile.current);
      console.log(data);
      if (data.response == 206) {
        dispatch({type: 'loading', payload: false});
        navigation.navigate('AddDetails', {
          email: data.email,
          userId: data.userid,
        });
      } else throw data.msg || 'Unknown Error occured';
    } catch (err) {
      showToast(err);
      dispatch({type: 'loading', payload: false});
    }
  };

  return (
    <ScreenContainer>
      <TopHeader
        title="Enter your Mobile & Email"
        onBackPress={navigation.goBack}
      />
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Please enter your Mobile Number & Email.
        </Text>
        <TextInput
          placeholder="Mobile"
          onChangeText={v => (mobile.current = v)}
          maxLength={10}
        />
        <View style={{marginBottom: 30}}></View>
        <TextInput
          placeholder="Email"
          onChangeText={v => (email.current = v)}
        />
        <Button title="REGISTER" onPress={onSubmit} style={{marginTop: 16}} />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  instructions: {
    fontSize: 13,
    marginVertical: 16,
  },
  link: {
    padding: 20,
    color: 'blue',
    textAlign: 'center',
  },
});

export default RegisterationScreen;
