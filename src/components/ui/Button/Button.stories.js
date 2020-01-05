import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { Button } from './Button';

export default {
  title: 'Components|Atoms/Button',
  decorators: [withKnobs],
};

export const basic = () => <Button onClick={action('clicked')} caption='Hello Button' />;

export const customContent = () => (
  <Button
    onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const outline = () => (
  <>
    <Button onClick={action('clicked')} caption='Outline => false' />
    <Button onClick={action('clicked')} caption='Outlined' outline />
  </>
);

export const disabled = () => (
  <>
    <Button onClick={action('clicked')} caption='Hello Button' />
    <Button onClick={action('clicked')} caption='Hello Button' /><Button onClick={action('clicked')} caption='Hello Button' /><Button onClick={action('clicked')} caption='Hello Button' /><Button onClick={action('clicked')} caption='Hello Button' />
    <Button onClick={action('clicked')} caption='Disabled button' disabled />
  </>
);
export const loading = () => (
  <>
    <Button onClick={action('clicked')} caption='Hello Button' />
    <Button onClick={action('clicked')} caption='Hello Button' isLoading />
  </>
);

export const withVars = () => (
  <Button
    outline={boolean("Outline", false)}
    disabled={boolean("Disabled", false)}
    isLoading={boolean("isLoading", false)}
    caption={text("Caption", "Cutom button")}
    onClick={action('clicked')}
  />
);
