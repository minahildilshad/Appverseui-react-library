import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DropdownMenu } from '../components/DropdownMenu';

describe('DropdownMenu Component', () => {
  it('displays menu items when triggered', () => {
    render(<DropdownMenu triggerLabel="Menu" items={[{ id: '1', label: 'Action 1', onClick: () => {} }]} />);
    fireEvent.click(screen.getByRole('button', { name: /menu/i }));
    expect(screen.getByRole('menuitem')).toBeInTheDocument();
  });
});