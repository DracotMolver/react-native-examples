import React from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
// 
import MockedNavigator from './__mocks__/mockNavigation';
import MockProvider from './__mocks__/mockProvider';
// stack
import Dashboard from './containers/Dashboard';

describe('[component_name]', () => {
  afterEach(() => {
    fetch.mockClear();
    cleanup();
  });

  const Component = () => (
    <MockProvider>
      <MockedNavigator component={Dashboard} />
    </MockProvider>
  );

  it('Async assertion', async () => {
    fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        data: [{ numeroCuenta: '123' }, { numeroCuenta: '345' }],
      }),
    });

    // testing AsynStorage
    await AsyncStorage.setItem(
      '@login',
      JSON.stringify({ username: 'diego', firstTime: true }),
    );

    const { update, getByText } = render(<Component />);

    // Use async await when the component has async await int the update life cycle
    await act(async () => {
      update(<Component />);
    });

    // The same affect as above. If the function has an async action (redux, async/await function, etc).
    await act(async () => {
      fireEvent(getByText('button'), 'onPress');
    });
  });
});
