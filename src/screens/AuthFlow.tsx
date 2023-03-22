import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ForgotPassword from './ForgotPassword';
import LoginPage from './LoginPage';
import NewPassword from './NewPassword';
import OTPPage from './OTPPage';
import ProfilePage from './ProfilePage';
import Signup from './Signup';

const AuthStack = createStackNavigator();
function AuthFlow() {
  return (
    <AuthStack.Navigator
      initialRouteName="loginpage"
      screenOptions={{headerBackTitleVisible: false}}>
      <AuthStack.Screen name="loginpage" component={LoginPage} />
      <AuthStack.Screen name="profilepage" component={ProfilePage} />
      <AuthStack.Screen name="signup" component={Signup} />
      <AuthStack.Screen name="forgotflow" component={ForgotPassword} />
      <AuthStack.Screen name="otppage" component={OTPPage} />
      <AuthStack.Screen name="newpasswordpage" component={NewPassword} />
    </AuthStack.Navigator>
  );
}
//navigation.navigate('Profile');

export default AuthFlow;
