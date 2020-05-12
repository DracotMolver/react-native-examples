import React from 'react';
import { render, cleanup } from 'react-native-testing-library';
// mock
// component
import ModalHOC from '../../app/components/UI/Modal';

afterEach(cleanup);

describe('Testing UI - Modal component', () => {
  const FakeComponent = ({ title }) => {
    const { Modal } = ModalHOC();

    return <Modal title={title} />;
  };

  it('Should render right', () => {
    const rendered = render(<FakeComponent title="test" />).toJSON();

    expect(rendered).toMatchSnapshot();
  });

  it('Should start closed (false)', () => {
    const { getByTestId } = render(<FakeComponent title="test" />);

    const modal = getByTestId('modal-native');

    expect(modal.props.visible).toBeFalsy();
  });

  it('Should hast the right text', () => {
    const { getByTestId } = render(<FakeComponent title="test" />);

    const text = getByTestId('modal-text');

    expect(text.props.children).toBe('test');
  });
});
