import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// Draw Navigation
import DrawerNav from './routes/DrawerNav';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const App = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="dark-content" />
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  </SafeAreaView>
);

export default App;
