import React from 'react';
import type { Meta } from '@storybook/react';
import { Accordion } from '../components/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'AppverseUI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;

export const Default = () => (
  <Accordion
    items={[
      { id: '1', title: 'Section 1', content: <p>Details for section 1</p> },
      { id: '2', title: 'Section 2', content: <p>Details for section 2</p> },
    ]}
  />
);