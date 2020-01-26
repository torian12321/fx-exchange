import * as React from "react";
import serializer from 'jest-emotion'
import { create } from "react-test-renderer";
import { Heading } from "../Heading";

expect.addSnapshotSerializer(serializer)

describe("UI Component: Header", () => {
  [1, 2, 3, 4, 5, 6].forEach(level =>
    it(`should correctly render h${level} for level ${level}`, () => {
      const heading = create(
        <Heading caption="Header text" level={level} />
      );

      expect(heading.toJSON()).toMatchSnapshot();
    })
  );
});
