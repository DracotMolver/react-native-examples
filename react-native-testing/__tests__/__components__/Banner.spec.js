import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react-native';
import Banner from '.components/Banner';

describe('[component_name]', () => {
  afterEach(() => {
    // The component contains requestAnimationFrame. This way we can mock it
    requestAnimationFrame.mockClear();
    cleanup();
  });

  const defaultProps = {
    skeletonLoading: false,
    onPressHandle: jest.fn(),
    textButton: 'Vamos!',
    title: 'pide tu remanente',
  };

  const setupBanner = (props = defaultProps) => render(<Banner {...props} />);

  it('Should render snapshot without crashing', () => {
    const { toJSON } = setupBanner();

    expect(toJSON()).toMatchSnapshot('BANNER');
  });

  it('Should calls onPress function', () => {
    requestAnimationFrame.mockImplementationOnce(() => {
      defaultProps.onPressHandle();
    });

    const { getByText } = setupBanner();

    fireEvent(getByText('Vamos!'), 'onPress');

    expect(defaultProps.onPressHandle).toHaveBeenCalled();
  });
});
