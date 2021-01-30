import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
//
import ErrorBoundary from './components/ErrorBoundary';

describe('Error Boundary', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render snapshot without crashing', () => {
    const { toJSON } = render(<ErrorBoundary>some text</ErrorBoundary>);

    expect(toJSON('componentDidCatch-render')).toMatchSnapshot();
  });

  it('Should should crash', () => {
    const spy_on = jest.spyOn(ErrorBoundary.prototype, 'componentDidCatch');

    function getError() {
      return new Error('Error!');
    }

    const { toJSON } = render(
      <ErrorBoundary>
        <div>{getError()}</div>
      </ErrorBoundary>,
    );

    expect(spy_on).toHaveBeenCalled();
  });
});
