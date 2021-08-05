import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ScreenContainer,
  CustomText as Text,
  TopHeader,
  Button,
  LoadingIndicator,
} from '../../components';
import PasswordInput from './views/PasswordInput';
import {login} from '../../api/auth';
import {useGlobalContext} from '../../utils/globalContext';
import {showToast} from '../../utils/functions';
import {loginUser} from '../../utils/authService';

const LoginScreen = ({navigation, route: {params}}) => {
  const password = useRef();
  const {dispatch} = useGlobalContext();

  const onSubmit = async () => {
    if (!password.current) {
      showToast('Please Enter password');
      return;
    }
    try {
      dispatch({type: 'loading', payload: LoadingIndicator});
      const {data} = await login(params.email, password.current);

      if (data.response == 100) {
        await loginUser(
          data.user_id,
          data.access_token,
          params.name,
          params.email,
          dispatch,
        );
      } else if (data.response == 203) throw 'Please enter correct password';
      else throw 'Unknown Error occured';
    } catch (err) {
      showToast(err);
      dispatch({type: 'loading', payload: false});
    }
  };

  return (
    <ScreenContainer>
      <TopHeader title="Enter Password" onBackPress={navigation.goBack} />
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Please enter password for {params.email} email address.
        </Text>
        <PasswordInput
          placeholder="Password"
          onChangeText={value => (password.current = value)}
        />
        <Button title="LOGIN" onPress={onSubmit} style={{marginTop: 16}} />
        <Text
          style={styles.link}
          onPress={() => navigation.replace('ForgetPassword')}>
          Forget Password
        </Text>
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

export default LoginScreen;
