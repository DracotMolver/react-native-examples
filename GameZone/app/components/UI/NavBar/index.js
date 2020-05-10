import React from 'react';
import {
  useWindowDimensions,
  ImageBackground,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    flex: 1
  },
  headerText: {
    letterSpacing: 1,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333'
  },
  icon: {
    position: 'absolute',
    left: 8
  }
});

const NavBar = ({ title }) => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  function onPressOpenDrawer() {
    navigation.openDrawer();
  }

  return (
    <ImageBackground
      testID="navbar-imgback"
      source={require('../../../assets/images/game_bg.png')}
      style={{ ...styles.header, width }}>
      <Icon
        testID="navbar-icon"
        onPress={onPressOpenDrawer}
        color="black"
        style={styles.icon}
        size={48}
        name="menu"
      />
      <View testID="navbar-header-container" style={styles.headerText}>
        <Text>{title}</Text>
      </View>
    </ImageBackground>
  );
};

export default NavBar;
