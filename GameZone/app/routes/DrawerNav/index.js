import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// Navigation Stack
import HomeStack from '../HomeStack';
import AboutStack from '../AboutStack';

const Drawer = createDrawerNavigator();

const DrawerNav = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="About" component={AboutStack} />
  </Drawer.Navigator>
);

export default DrawerNav;
