import React from "react";
import { create } from "react-test-renderer";
import { Ellipsis } from "../.././Loader";
import { Button } from '../Button';

describe("UI Component: Button", () => {
  it(`should render as a button`, () => {
    const btn = create(
      <Button caption="Button text" />
    );

    expect(btn.toJSON().type).toEqual('button');
    expect(btn.toJSON()).toMatchSnapshot();
  });

  it(`should render Ellipses when isLoading`, () => {
    const btn = create(
      <Button caption="Button text" isLoading />
    );

    const element = btn.root;

    expect(element.findAllByType("button").length).toEqual(1);
    expect(element.findAllByType(Ellipsis).length).toEqual(1);
  });
});

