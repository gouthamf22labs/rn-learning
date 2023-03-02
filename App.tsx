import React from 'react';
import Dum from './src/screens/Dum';
import auth from './src/utils/Auth';
import AuthStack from './src/screens/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';

const Stack = createNativeStackNavigator();
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

function App(): JSX.Element {
  const token = auth();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* {token ? (
          <Stack.Screen name="Auth" component={AuthStack} />
        ) : ( */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
