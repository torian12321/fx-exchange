import React from "react";
import { create } from "react-test-renderer";
import { Ellipsis } from "../Ellipsis";

describe("UI Component: Loader -> Ellipsis", () => {
  it(`should render with 3 spans`, () => {
    const component = create(
      <Ellipsis />
    );

    const ellipsis = component.root;

    expect(ellipsis.findAllByType("div").length).toEqual(1);
    expect(ellipsis.findAllByType("span").length).toEqual(3);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
