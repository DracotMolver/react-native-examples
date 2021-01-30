import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";

const TestComponent = () => <Text>home</Text>;

const Stack = createStackNavigator();

const MockedNavigator = ({ stack = null, component, params = {} }) => (
  <NavigationContainer>
    {stack ? (
      stack
    ) : (
      <Stack.Navigator>
        <Stack.Screen
          name="MockedScreen"
          component={component}
          initialParams={params}
        />
        <Stack.Screen
          name="home"
          component={TestComponent}
          initialParams={params}
        />
        <Stack.Screen
          name="login"
          component={TestComponent}
          initialParams={params}
        />
        <Stack.Screen
          name="bloqueo_tarjetas"
          component={TestComponent}
          initialParams={params}
        />
      </Stack.Navigator>
    )}
  </NavigationContainer>
);

export default MockedNavigator;
