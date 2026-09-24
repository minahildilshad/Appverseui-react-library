import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'AppverseUI/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: 'Username', placeholder: 'Enter your username' },
};

export const WithError: Story = {
  args: { label: 'Email', isError: true, helperText: 'Invalid email address' },
};