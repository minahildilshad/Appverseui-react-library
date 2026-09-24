import React from 'react';
import type { Meta } from '@storybook/react';
import { Tabs } from '../components/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'AppverseUI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;

export const Default = () => (
  <Tabs
    items={[
      { id: 'tab1', label: 'Overview', content: <div>Overview Content</div> },
      { id: 'tab2', label: 'Settings', content: <div>Settings Panel</div> },
    ]}
  />
);