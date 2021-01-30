import React from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
//
import store from './config';

const MockProvider = ({ children, initState }) => (
  <Provider store={{ ...store, ...initState }} context={ReactReduxContext}>
    {children}
  </Provider>
);

export default MockProvider;
