import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from '../components/DropdownMenu';

const meta: Meta<typeof DropdownMenu> = {
  title: 'AppverseUI/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    triggerLabel: 'Options',
    items: [
      { id: '1', label: 'Account Settings', onClick: () => {} },
      { id: '2', label: 'Logout', onClick: () => {} },
    ],
  },
};