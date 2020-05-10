import React from 'react';
import { render, cleanup } from 'react-native-testing-library';
// mock
import MockedNavigator from '../../__mocks__/MockedNavigator';
// component
import NavBar from '../../app/components/UI/NavBar';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

afterEach(cleanup);

describe('Testing UI - NavBar component', () => {
  it('Should render right', () => {
    const rendered = render(
      <MockedNavigator headerTitleComponent={<NavBar title="test" />} />
    ).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it('Should has two children', () => {
    const { getByTestId } = render(
      <MockedNavigator headerTitleComponent={<NavBar title="test" />} />
    );

    const imgBack = getByTestId('navbar-imgback');

    expect(imgBack.props.children.length).toEqual(2);
  });
});
