import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'AppverseUI/Toast',
  component: Toast,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: { id: '1', message: 'Changes saved successfully!', type: 'success', onClose: () => {} },
};