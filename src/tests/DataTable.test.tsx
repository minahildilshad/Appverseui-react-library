import React from 'react';
import { render, screen } from '@testing-library/react';
import { DataTable } from '../components/DataTable';

describe('DataTable Component', () => {
  it('renders data rows and headers', () => {
    render(
      <DataTable
        data={[{ id: 1, name: 'Alice' }]}
        columns={[{ key: 'id', header: 'ID' }, { key: 'name', header: 'Name' }]}
      />
    );
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });
});