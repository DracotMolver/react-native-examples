import 'react-native-gesture-handler/jestSetup';
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('react-native/Libraries/Components/Switch/Switch', () => {
  const mockComponent = require('react-native/jest/mockComponent');
  return mockComponent('react-native/Libraries/Components/Switch/Switch');
});

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.mock(
  '../node_modules/react-native/Libraries/LayoutAnimation/LayoutAnimation.js',
);

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

jest.mock('react-native-device-info', () => {
  return {
    getSystemVersion: jest.fn(),
    getSystemName: jest.fn(),
    getDeviceType: jest.fn(),
    getDeviceId: jest.fn(),
    isLandscape: jest.fn(),
    isEmulator: jest.fn(),
    hasNotch: jest.fn(),
  };
});

jest.mock('expo-local-authentication', () => ({
  ...jest.requireActual('expo-local-authentication'),
  supportedAuthenticationTypesAsync: jest.fn(),
  authenticateAsync: jest.fn(),
  isEnrolledAsync: jest.fn(),
}));

jest.mock('@react-native-async-storage/async-storage', () => {
  const obj = {};

  return {
    async setItem(key, value) {
      obj[key] = value;
    },
    async getItem(key) {
      let el = null;

      if (obj[key]) {
        el = obj[key];
      }

      return el;
    },
    async removeItem(key) {
      obj[key] = null;
    },
  };
});

jest.mock('react-native-keychain');

global.requestAnimationFrame = jest.fn();
global.fetch = jest.fn();
