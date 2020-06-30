import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import About from '../../screens/About';
// UI - Components
import NavBar from '../../components/UI/NavBar';

const Stack = createStackNavigator();

const AboutStack = () => (
  <Stack.Navigator initialRouteName="About">
    <Stack.Screen
      name="About"
      component={About}
      // options={{
      //   headerTitle: () => <NavBar title="About GameZone" />
      // }}
    />
  </Stack.Navigator>
);

export default AboutStack;
