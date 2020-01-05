import React from 'react';
import { Heading } from './Heading';

export default {
  title: 'Components|Atoms/Heading'
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
