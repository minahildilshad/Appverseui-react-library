import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Modal } from '../components/Modal';

describe('Modal Component', () => {
  it('renders title and handles close click', () => {
    const handleClose = jest.fn();
    render(<Modal isOpen={true} title="Dialog Header" onClose={handleClose}>Content</Modal>);
    expect(screen.getByText('Dialog Header')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText(/close dialog/i));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});