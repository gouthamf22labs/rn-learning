import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {QueryClientProvider} from 'react-query';
import {queryClient} from './src/api/axios-utils';
import AuthFlow from './src/screens/AuthFlow';
import HomepageFlow from './src/screens/HomepageFlow';
import auth from './src/utils/Auth';
function App(): JSX.Element {
  const token = auth();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        {token ? <AuthFlow /> : <HomepageFlow />}
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
