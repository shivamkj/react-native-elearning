import React, {useRef, useState, useEffect} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {genrateOtp, verifyOtp} from '../../../api/auth';
import {CustomText as Text} from '../../../components';
import {colors} from '../../../config';

const TIME_LIMIT = 30;

const OtpInput = ({onVerificationSuccess, email, userId}) => {
  const enteredOtp = useRef([]);
  const otpTextInput = [];
  const [error, setError] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const otpResent = useRef(0);
  const otp = useRef([]);
  const timeout = useRef();

  // useEffect(() => {
  //   genrateOtp(email).then((result) => {
  //     otp.current.push(parseInt(result.data.otp));
  //   });
  // }, []);

  const handleChange = (index, value) => {
    if (index < otpTextInput.length - 1 && value) {
      otpTextInput[index + 1].focus();
    }
    enteredOtp.current[index] = value;
    if (index === otpTextInput.length - 1) {
      otpTextInput[index].blur();
      const finalOtp = enteredOtp.current.join('');
      if (finalOtp.length == 4) handleSubmit(finalOtp);
    }
  };

  const handleSubmit = enteredOtp => {
    verifyOtp(userId, email, enteredOtp).then(result => {
      if (result.data.response == 100) {
        setError(null);
        onVerificationSuccess();
        clearInterval(timeout.current);
      } else setError('Wrong OTP entered!');
    });
  };

  const focusPrevious = (key, index) => {
    if (key === 'Backspace' && index !== 0) {
      otpTextInput[index - 1].focus();
    }
  };

  useEffect(() => {
    timeout.current = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime == 0) {
          clearInterval(timeout);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    return () => clearInterval(timeout.current);
  }, [timeLeft]);

  const resendOtp = () => {
    if (error == null) return;
    if (otpResent.current == 2) alert('OTP cannot be sent more than 2 times.');
    else if (timeLeft == 0) {
      genrateOtp(email).then(result =>
        otp.current.push(parseInt(result.data.otp)),
      );
      setTimeLeft(TIME_LIMIT);
      otpResent.current += 1;
    }
  };

  const borderColor = () => {
    return error
      ? colors.redAccent
      : error == null
      ? colors.greenAccent
      : colors.sectionBackground;
  };

  const renderInputs = () =>
    Array(4)
      .fill(0)
      .map((_, index) => (
        <TextInput
          style={[styles.otpNumber, {borderColor: borderColor()}]}
          keyboardType="numeric"
          maxLength={1}
          key={index}
          onChangeText={v => handleChange(index, v)}
          onKeyPress={e => focusPrevious(e.nativeEvent.key, index)}
          ref={ref => (otpTextInput[index] = ref)}
          editable={error != null}
        />
      ));

  return (
    <>
      <View style={styles.otpContainer}>{renderInputs()}</View>
      <View
        style={[
          styles.lowerContainer,
          {justifyContent: error ? 'space-between' : 'flex-end'},
        ]}>
        {error && <Text style={styles.error}>{error}</Text>}
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.timer}>
            {Math.floor(timeLeft / 60)} : {timeLeft % 60}
          </Text>
          <Text onPress={resendOtp} style={styles.resendText}>
            Resend OTP
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  otpNumber: {
    backgroundColor: colors.sectionBackground,
    borderWidth: 1,
    borderRadius: 4,
    padding: 14,
    margin: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  timer: {
    fontFamily: 'Bold-700',
    fontSize: 14,
  },
  error: {
    fontSize: 14,
    fontFamily: 'SemiBold-600',
    color: colors.redAccent,
  },
  resendText: {
    color: colors.link,
    marginLeft: 8,
    fontFamily: 'SemiBold-600',
    fontSize: 14,
  },
  lowerContainer: {
    flexDirection: 'row',
    marginBottom: 14,
  },
});

export default OtpInput;
