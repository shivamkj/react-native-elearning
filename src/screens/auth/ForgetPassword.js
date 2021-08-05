import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ScreenContainer,
  CustomText as Text,
  TopHeader,
  Button,
} from '../../components';
import {resetPassword} from '../../api/auth';
import {showToast} from '../../utils/functions';
import AppTextInput from '../../components/TextInput';

const ForgetPasswordScreen = ({navigation}) => {
  const email = useRef();

  const onSubmit = () => {
    resetPassword(email.current).then((result) => {
      if (result.data.response == 100) navigation.goBack();
      else showToast('Network Error');
    });
  };

  return (
    <ScreenContainer>
      <TopHeader title="Forget Password" onBackPress={navigation.goBack} />
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Please enter your email address to recieve instruction for resetting
          password.
        </Text>
        <AppTextInput
          placeholder="Email"
          onChangeText={(v) => (email.current = v)}
        />
        <Button title="SEND" onPress={onSubmit} style={{marginTop: 16}} />
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

export default ForgetPasswordScreen;
