import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Toast } from '../components/Toast';

describe('Toast Component', () => {
  it('displays notification and closes', () => {
    const handleClose = jest.fn();
    render(<Toast id="1" message="Success message" onClose={handleClose} />);
    expect(screen.getByText('Success message')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText(/dismiss/i));
    expect(handleClose).toHaveBeenCalledWith('1');
  });
});