import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, ScrollView, Keyboard} from 'react-native';
import {
  CustomText as Text,
  ScreenContainer,
  TopHeader,
  Button,
} from '../../components';
import OtpInput from './views/OtpInput';
import PasswordInput from './views/PasswordInput';
import InputField from './views/InputField';
import {addDetails} from '../../api/auth';
import {loginUser} from '../../utils/authService';
import {useGlobalContext} from '../../utils/globalContext';

const RegistrationScreen = ({navigation, route: {params}}) => {
  const {dispatch} = useGlobalContext();
  const [otpVerified, setOtpVerified] = useState(false);
  const [errors, setErrors] = useState([false, false, false, false]);
  const formData = useRef({
    firstName: '',
    lastName: '',
    mobileNum: '',
    password: '',
  });

  useEffect(() => {
    const _keyboardDidHide = () => Keyboard.dismiss();
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    return () => Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
  }, []);

  const onSubmit = () => {
    const errors = validateInput(formData.current);
    if (errors.length == 0) {
      setErrors([false, false, false, false]);
      const {firstName, lastName, mobileNum, password} = formData.current;
      addDetails(params.userId, firstName, lastName, mobileNum, password).then(
        (result) => {
          loginUser(
            params.userId,
            result.data.access_token,
            firstName + ' ' + lastName,
            params.email,
            dispatch,
          );
        },
      );
    } else setErrors(errors);
  };

  const handleInput = (feild, value) => {
    formData.current[feild] = value;
  };

  return (
    <ScreenContainer>
      <TopHeader title="Create Account" onBackPress={navigation.goBack} />
      <ScrollView style={styles.container}>
        <Text style={styles.instructions}>
          {`Please enter 4 digit code sent to you ${params.email} and verify your email address.`}
        </Text>
        <OtpInput
          onVerificationSuccess={() => setOtpVerified(true)}
          email={params.email}
        />
        <InputField
          editable={otpVerified == true}
          placeholder="First Name"
          error={errors[0]}
          onChangeText={(v) => handleInput('firstName', v)}
        />
        <InputField
          editable={otpVerified == true}
          placeholder="Last Name"
          error={errors[1]}
          onChangeText={(v) => handleInput('lastName', v)}
        />
        <InputField
          editable={otpVerified == true}
          placeholder="Mobile Number"
          error={errors[2]}
          onChangeText={(v) => handleInput('mobileNum', v)}
          keyboardType="numeric"
          maxLength={10}
        />
        <PasswordInput
          editable={otpVerified == true}
          error={errors[3]}
          placeholder="Password"
          onChangeText={(v) => handleInput('password', v)}
        />
        <Button
          title="REGISTER"
          onPress={onSubmit}
          style={{marginTop: 16}}
          disabled={otpVerified == false}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

const validateInput = (formData) => {
  const errors = [];
  if (!formData.firstName) errors[0] = 'First Name must not be empty';
  if (formData.mobileNum.length < 10) errors[2] = 'Enter valid Mobile Number';
  if (formData.password.length < 8)
    errors[3] = 'Password should be greater than 8 characters';
  return errors;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 16,
    marginTop: 5,
  },
  instructions: {
    fontSize: 13,
    marginBottom: 18,
  },
});

export default RegistrationScreen;
