// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react-native';
import { createStore } from 'redux';
import { Provider, ReactReduxContext } from 'react-redux';
// Import your own reducer
import reducer from '../src/application/actions';
import LoadIcons from 'components/atoms/LoadIcons';

function render(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store} context={ReactReduxContext}>
        <LoadIcons>{children}</LoadIcons>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react-native';
// override render method
export { render };
