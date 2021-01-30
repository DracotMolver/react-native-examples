import React from "react";
import { cleanup, render, fireEvent, act } from "@testing-library/react-native";
import Button from "./components/Button";

// Test a component
describe("[component_name]", () => {
  afterEach(() => {
    // Clean always after an assertion.
    cleanup();
  });

  it("Should render snapshot without crashing", () => {
    const { toJSON } = render(<ButtonAdd />);

    expect(toJSON()).toMatchSnapshot();
  });

  it("Should call function at least one ", () => {
    const mockFunc = jest.fn();

    const { update, findByTestId } = render(
      <Button id="add" onPress={mockFunc} />
    );

    const btn = findByTestId("add");

    fireEvent(btn, "onPress");

    expect(mockFunc).toHaveBeenCalled();
  });

});
