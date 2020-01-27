import React from "react";
import { create } from "react-test-renderer";
import * as sinon from "sinon";
import { Ellipsis } from "../../Loader";
import { Button } from '../Button';

describe("UI Component: Button", () => {
  it(`should render as a button`, () => {
    const component = create(
      <Button caption="Button text" />
    );

    expect(component.toJSON().type).toEqual('button');
    expect(component.toJSON()).toMatchSnapshot();
  });

  it("should be clickable ", () => {
    // Given
    const fn = sinon.stub();
    const component = create(
      <Button caption="Button text" onClick={fn} />
    );

    // When
    component.root.findByType('button').props.onClick();

    // Then
    expect(component.toJSON()).toMatchSnapshot();
    expect(fn.callCount).toBe(1);
  });

  describe("disalbed", () => {
    it("should be disabled", () => {
      // Given
      const component = create(
        <Button caption="Button text" disabled />
      );

      // When
      const btn = component.root.findByType('button');

      // Then
      expect(component.toJSON()).toMatchSnapshot();
      expect(btn.props.disabled).toBe(true);
    });
    it("should be non clickable", () => {
      // Given
      const fn = sinon.stub();
      const component = create(
        <Button caption="Button text" onClick={fn} disabled />
      );

      // When
      const btn = component.root.findByType('button');
      btn.props.onClick();

      // Then
      expect(fn.callCount).toBe(0);
    });
  });


  describe("isLoading", () => {
    it(`should render with Ellipses`, () => {
      // Given && When
      const component = create(
        <Button caption="Button text" isLoading />
      );

      const btn = component.root;

      // Then
      expect(component.toJSON()).toMatchSnapshot();
      expect(btn.findAllByType("button").length).toEqual(1);
      expect(btn.findAllByType(Ellipsis).length).toEqual(1);
    });
    it(`should not be clickable`, () => {
      // Given
      const fn = sinon.stub();
      const component = create(
        <Button caption="Button text" isLoading onClick={fn} />
      );

      // When
      const btn = component.root.findByType('button');
      btn.props.onClick();

      // Then
      expect(fn.callCount).toBe(0);
      expect(btn.props.disabled).toBe(true);
    });
  });
});
