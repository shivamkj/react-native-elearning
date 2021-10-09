import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppNavigator from './AppNavigator';
import EmailAuthScreen from '../screens/auth/EmailAuth';
import LoginScreen from '../screens/auth/Login';
import RegistrationScreen from '../screens/auth/Registration';
import ForgetPasswordScreen from '../screens/auth/ForgetPassword';
import AddDetailsScreen from '../screens/auth/AddDetails';

const RootStack = createStackNavigator();

const RootNavigator = ({isLoggedIn}) => (
  <RootStack.Navigator screenOptions={{headerShown: false}}>
    {isLoggedIn ? (
      <RootStack.Screen name="RootStack" component={AppNavigator} />
    ) : (
      <>
        <RootStack.Screen name="EmailAuth" component={EmailAuthScreen} />
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="Registration" component={RegistrationScreen} />
        <RootStack.Screen name="AddDetails" component={AddDetailsScreen} />
        <RootStack.Screen
          name="ForgetPassword"
          component={ForgetPasswordScreen}
        />
      </>
    )}
  </RootStack.Navigator>
);

export default RootNavigator;
