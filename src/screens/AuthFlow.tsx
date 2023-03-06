import React from 'react';
import LoginPage from './LoginPage';
import auth from '../utils/Auth';
import {createStackNavigator} from '@react-navigation/stack';
import SignupFlow from './SignupFlow';
import ForgotPassword from './ForgotPassword';
import OTPPage from './OTPPage';

const AuthStack = createStackNavigator();
function AuthFlow() {
  const token = auth();
  return (
    <AuthStack.Navigator
      initialRouteName="otppage"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="loginpage" component={LoginPage} />
      <AuthStack.Screen name="signupflow" component={SignupFlow} />
      <AuthStack.Screen name="forgotflow" component={ForgotPassword} />
      <AuthStack.Screen name="otppage" component={OTPPage} />
    </AuthStack.Navigator>
  );
}

export default AuthFlow;
