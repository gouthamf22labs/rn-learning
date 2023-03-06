import React from 'react';
import auth from './src/utils/Auth';
import {NavigationContainer} from '@react-navigation/native';
import AuthFlow from './src/screens/AuthFlow';
import HomePage from './src/screens/HomePage';

function App(): JSX.Element {
  const token = auth();
  return (
    <NavigationContainer>
      {token ? <AuthFlow /> : <HomePage />}
    </NavigationContainer>
  );
}

export default App;
