import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from '../components/Modal';

const meta: Meta<typeof Modal> = {
  title: 'AppverseUI/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const OpenModal: Story = {
  args: {
    isOpen: true,
    title: 'Confirm Action',
    children: 'Are you sure you want to proceed with this operation?',
    onClose: () => {},
  },
};