import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '../components/ui';

export default {
  title: 'Btn',
};

export const text = () => <Button onClick={action('clicked')} caption='Hello Button' />;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
