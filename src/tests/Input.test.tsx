import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../components/Input';

describe('Input Component', () => {
  it('handles input text entry', () => {
    const handleChange = jest.fn();
    render(<Input label="Email" onChange={handleChange} />);
    const inputElement = screen.getByLabelText(/email/i);
    fireEvent.change(inputElement, { target: { value: 'test@example.com' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});