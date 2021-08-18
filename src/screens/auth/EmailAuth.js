import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, View, Keyboard, TextInput} from 'react-native';
import {
  ScreenContainer,
  CustomText as Text,
  Button,
  LoadingIndicator,
} from '../../components';
import {checkEmail} from '../../api/auth';
import {useGlobalContext} from '../../utils/globalContext';
import {colors, defaultStyles} from '../../config';
import {BackArrow} from '../../assets/icons';
import {isValidEmail, showToast} from '../../utils/functions';

const EmailAuthScreen = ({navigation}) => {
  const {dispatch} = useGlobalContext();
  const [error, setError] = useState(null);
  const [inputFocused, setInputFocused] = useState(false);
  const email = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const _keyboardDidHide = () => {
      setInputFocused(false);
      inputRef.current.blur();
    };
    const subscription = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide,
    );
    return () => subscription.remove();
  }, []);

  const handleSubmit = () => {
    if (isValidEmail(email.current)) setError(false);
    else {
      setError('Enter valid email');
      return;
    }
    dispatch({type: 'loading', payload: LoadingIndicator});
    checkEmail(email.current)
      .then(result => {
        dispatch({type: 'loading', payload: false});
        if (result.data.response == 100)
          navigation.navigate('Login', {
            email: result.data.email,
            name: result.data.username,
          });
        else alert('You are not registered. Please register first');
      })
      .catch(err => {
        showToast(err);
        dispatch({type: 'loading', payload: false});
      });
  };

  const skipAuth = () => {
    dispatch({type: 'auth', payload: true});
  };

  return (
    <ScreenContainer style={styles.container}>
      <Text style={styles.skip} onPress={skipAuth}>
        Skip
      </Text>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          resizeMode="stretch"
          source={require('../../assets/logo.png')}
        />
      </View>
      <Text style={styles.tagline}>
        Study anytime and anywhere with our offline courses.
      </Text>
      <View
        style={[
          styles.box,
          defaultStyles.shadow,
          inputFocused && styles.focused,
        ]}>
        {inputFocused && (
          <BackArrow
            style={styles.back}
            color="#000"
            onPress={Keyboard.dismiss}
          />
        )}
        <Text style={styles.loginAppText}>Login/Singup To Access Courses</Text>
        {error && <Text style={styles.error}>{error}</Text>}
        <View
          style={[styles.inputContainer, {borderColor: getBorderColor(error)}]}>
          <TextInput
            ref={inputRef}
            autoCapitalize="none"
            placeholder="Email"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            onChangeText={value => (email.current = value)}
            style={styles.input}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
          />
        </View>
        <Button
          style={styles.continueBtn}
          title="CONTINUE"
          onPress={handleSubmit}
        />
        <Text
          onPress={() => navigation.navigate('Registration')}
          style={styles.register}>
          Don’t have an account? Register Now
        </Text>
      </View>
    </ScreenContainer>
  );
};

const getBorderColor = error => {
  if (error == false) return colors.greenAccent;
  else if (error) return colors.redAccent;
  else return colors.sectionBackground;
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  skip: {
    position: 'absolute',
    top: 28,
    right: 24,
    fontSize: 15,
    color: colors.subText,
    fontFamily: 'SemiBold-600',
  },
  logoContainer: {
    marginTop: 143,
    marginBottom: 60,
  },
  logo: {
    height: 44,
    width: 150,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: colors.sectionBackground,
    borderRadius: 4,
    flexDirection: 'row',
    paddingHorizontal: 6,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontFamily: 'SemiBold-600',
    fontSize: 15,
    color: '#000',
  },
  error: {
    fontFamily: 'SemiBold-600',
    fontSize: 14,
    color: colors.redAccent,
    marginBottom: 6,
  },
  continueBtn: {
    marginVertical: 16,
    backgroundColor: colors.primaryGreen,
  },
  tagline: {
    fontFamily: 'SemiBold-600',
    marginHorizontal: 24,
    marginBottom: 30,
    color: colors.black,
    fontSize: 15,
    opacity: 0.4,
    textAlign: 'center',
  },
  box: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
  focused: {
    position: 'absolute',
    bottom: 0,
    top: 0,
  },
  back: {
    marginTop: 24,
    marginBottom: 28,
  },
  sepratorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  seprator: {
    color: colors.subText,
    paddingHorizontal: 8,
  },
  sepratorBorder: {
    width: 32,
    height: 1,
    backgroundColor: '#000',
  },
  loginAppText: {
    fontFamily: 'Bold-700',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 24,
  },
  register: {
    marginTop: 16,
    fontSize: 16,
    fontFamily: 'Bold-700',
    textAlign: 'center',
  },
});

export default EmailAuthScreen;
