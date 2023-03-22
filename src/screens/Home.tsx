import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import MapScreen from './MapScreen';
import ProfilePage from './ProfilePage';

function Home(): JSX.Element {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'homescreen':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'mapscreen':
              iconName = focused ? 'map' : 'map-outline';
              break;
            case 'profilepage':
              iconName = focused
                ? 'ios-person-circle-sharp'
                : 'ios-person-circle-outline';
              break;
            default:
              break;
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        options={{headerShown: false}}
        name="homescreen"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="mapscreen"
        component={MapScreen}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="profilepage"
        component={ProfilePage}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    padding: 20,
  },
  widthContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'green',
  },
});

export default Home;
