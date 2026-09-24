import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DatePicker } from '../components/DatePicker';

describe('DatePicker Component', () => {
  it('handles date changes', () => {
    const handleChange = jest.fn();
    render(<DatePicker label="Select Date" onChange={handleChange} />);
    const dateInput = screen.getByLabelText(/select date/i);
    fireEvent.change(dateInput, { target: { value: '2026-09-24' } });
    expect(handleChange).toHaveBeenCalledWith('2026-09-24');
  });
});