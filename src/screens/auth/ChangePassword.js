import React, {useRef} from 'react';
import {Alert, View} from 'react-native';
import {changePassword} from '../../api/auth';
import {Button, ScreenContainer, TopHeader} from '../../components';
import PasswordInput from './views/PasswordInput';

const ChangePasswordScreen = ({navigation}) => {
  const oldPassword = useRef();
  const newPassword = useRef();

  const savePassword = () => {
    let error;
    if (!newPassword.current) error = 'Please enter your new password';
    if (!oldPassword.current) error = 'Please enter your old password';
    if (oldPassword.current == newPassword.current)
      error = 'Old and new passwords are same';
    if (error) {
      Alert.alert('Old and new passwords are same');
      return;
    }
    changePassword(oldPassword.current, newPassword.current).then(
      (response) => {
        if (response.data.response == 203)
          Alert.alert('Old Password does not match');
        else if (response.data.response == 101)
          Alert.alert('Password changed Successfully');
      },
    );
  };

  return (
    <ScreenContainer>
      <TopHeader title="Change Password" onBackPress={navigation.goBack} />
      <View style={{alignItems: 'center', marginHorizontal: 24}}>
        <PasswordInput
          placeholder="Old Password"
          onChangeText={(value) => (oldPassword.current = value)}
        />
        <View style={{marginBottom: 16}} />
        <PasswordInput
          placeholder="New Password"
          onChangeText={(value) => (newPassword.current = value)}
        />
        <Button
          title="Save New Password"
          style={{marginTop: 24}}
          onPress={savePassword}
        />
      </View>
    </ScreenContainer>
  );
};

export default ChangePasswordScreen;
