import React from 'react';
import { render, cleanup, fireEvent } from 'react-native-testing-library';
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

  it('Should the size icon be 48px', () => {
    const { getByTestId } = render(
      <MockedNavigator headerTitleComponent={<NavBar title="test" />} />
    );

    const icon = getByTestId('navbar-icon');

    expect(icon.props.size).toEqual(48);
  });

  it('Should container has right text content', () => {
    const { getByTestId } = render(
      <MockedNavigator headerTitleComponent={<NavBar title="test" />} />
    );

    const headerContainer = getByTestId('navbar-header-container');

    expect(headerContainer.props.children.props.children).toEqual('test');
  });
});
