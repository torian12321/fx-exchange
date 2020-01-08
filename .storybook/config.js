import { configure, addParameters, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';

// automatically import all files ending in *.stories.js
configure([
  require.context('../src/components', true, /\.stories\.js$/),
  // require.context('../src/stories', true, /\.stories\.js$/)
], module);


addDecorator(withA11y)
addParameters({
  viewport: {
    viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: 'someDefault',
  },
});
