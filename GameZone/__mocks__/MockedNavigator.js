import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const MockComponent = () => {
  return <div>test</div>;
};

const MockedNavigator = ({ routeName, component, headerTitleComponent }) => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={routeName || 'title'}>
      <Stack.Screen
        name={routeName || 'title'}
        component={component || MockComponent}
        options={{
          headerTitle: () => headerTitleComponent
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MockedNavigator;
