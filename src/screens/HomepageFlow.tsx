import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './Home';

const HomeStack = createStackNavigator();
function HomepageFlow() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        options={{headerShown: false}}
        name="home"
        component={Home}
      />
    </HomeStack.Navigator>
  );
}
//navigation.navigate('Profile');

export default HomepageFlow;
