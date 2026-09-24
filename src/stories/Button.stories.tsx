import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'AppverseUI/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { children: 'Click me' } };
export const Secondary: Story = { args: { children: 'Secondary', variant: 'secondary' } };
export const Loading: Story = { args: { children: 'Save', isLoading: true } };
