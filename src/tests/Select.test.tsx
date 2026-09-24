import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from '../components/Select';

describe('Select Component', () => {
  it('selects correct option value', () => {
    const handleChange = jest.fn();
    render(
      <Select
        label="Role"
        onChange={handleChange}
        options={[{ value: 'admin', label: 'Admin' }, { value: 'user', label: 'User' }]}
      />
    );
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'user' } });
    expect(handleChange).toHaveBeenCalledWith('user');
  });
});