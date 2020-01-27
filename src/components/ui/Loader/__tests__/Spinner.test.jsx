import React from "react";
import { create } from "react-test-renderer";
import { Spinner } from "../Spinner";

describe("UI Component: Loader -> Spinner", () => {
  it(`should render`, () => {
    const component = create(
      <Spinner />
    );

    const spinner = component.root;

    expect(spinner.findAllByType("div").length).toEqual(1);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
