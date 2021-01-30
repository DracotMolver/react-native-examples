import React from 'react';
import { cleanup, render } from './__mocks__/redux-testing';
import MiRemanenteCard from './components/MiRemanenteCard';

// Mocking with redux-texting
describe('[component_name]', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should render snapshot without crashing without data', () => {
    const { toJSON } = render(<MiRemanenteCard />, {
      ui: {
        loading: {
          miRemanenteLoading: true,
        },
      },
    });

    expect(toJSON()).toMatchSnapshot();
  });
});
