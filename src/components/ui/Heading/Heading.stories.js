import React from 'react';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { Heading } from './Heading';

export default {
  title: 'UI Components|Heading',
  decorators: [withKnobs],
};

export const basic = () => <Heading caption='Header Title' />;

export const customLevel = () => (
  <>
    <Heading caption='This is header 1' level={1} />
    <Heading caption='This is header 2' level={2} />
    <Heading caption='This is header 3' level={3} />
    <Heading caption='This is header 4' level={4} />
    <Heading caption='This is header 5' level={5} />
    <Heading caption='This is header 6' level={6} />
  </>
);

export const withVars = () => (
  <Heading
    caption={text("Caption", "Custom text")}
    level={select(
      'Level',
      {
        Default: null,
        Level_1: 1,
        Level_2: 2,
        Level_3: 3,
        Level_4: 4,
        Level_5: 5,
        Level_6: 6,
      }
    )}
  />
);
