import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';

const SignupStack = createStackNavigator();
function SignupFlow() {
  return (
    <SignupStack.Navigator
      initialRouteName="forgot"
      screenOptions={{
        headerShown: false,
      }}>
      <SignupStack.Screen name="signuppage" component={Signup} />
    </SignupStack.Navigator>
  );
}

export default SignupFlow;
