import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../components/Tooltip';
import { Button } from '../components/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'AppverseUI/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const TopPosition: Story = {
  args: {
    content: 'Helpful tooltip text',
    position: 'top',
    children: <Button>Hover Over Me</Button>,
  },
};