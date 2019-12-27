import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Button } from './Button';

export default {
  title: 'Components|Atoms/Button',
  decorators: [withKnobs],
};

export const textBtn = () => <Button onClick={action('clicked')} caption='Hello Button' />;

export const emoji = () => (
  <Button
    onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const withVars = () => (
  <Button
    disabled={boolean("Disabled", false)}
    caption={text("Caption", "Hello Storybook")}
    onClick={action('clicked')}
  />
);
