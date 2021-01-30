import React from 'react';
import { act, cleanup, render } from '@testing-library/react-native';
import useDebounce from './useDebounce';

// Example using timers
describe('useDebounce', () => {
  afterEach(() => {
    cleanup();
  });

  jest.useFakeTimers();

  const callback = jest.fn().mockImplementation(() => {
    return 'hola hola';
  });

  const Component = () => {
    useDebounce(callback, 1500, ['content'], ['hola']);

    return 'here!';
  };

  it('Should useDebounce trigger at certain time', () => {
    render(<Component />);

    expect(setTimeout).toHaveBeenCalledTimes(3);
    expect(callback).toBeCalled();

    act(() => {
      jest.runAllTimers();
    });
  });
});
