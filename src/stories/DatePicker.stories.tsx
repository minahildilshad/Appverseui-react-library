import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../components/DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'AppverseUI/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: { label: 'Select Date' },
};