import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import ReviewDetails from '../../screens/ReviewDetails';
import Home from '../../screens/Home';
// UI - Components
import NavBar from '../../components/UI/NavBar';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: () => <NavBar title="GameZone" />
      }}
    />
    <Stack.Screen
      name="ReviewDetails"
      component={ReviewDetails}
      title="Review Details"
    />
  </Stack.Navigator>
);

export default HomeStack;
