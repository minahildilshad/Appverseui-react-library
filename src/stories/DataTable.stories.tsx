import React from 'react';
import type { Meta } from '@storybook/react';
import { DataTable } from '../components/DataTable';

const meta: Meta<typeof DataTable> = {
  title: 'AppverseUI/DataTable',
  component: DataTable,
  tags: ['autodocs'],
};

export default meta;

export const Default = () => (
  <DataTable
    data={[
      { id: 1, name: 'Alice', role: 'Engineer' },
      { id: 2, name: 'Bob', role: 'Designer' },
    ]}
    columns={[
      { key: 'id', header: 'ID' },
      { key: 'name', header: 'Name' },
      { key: 'role', header: 'Role' },
    ]}
  />
);