import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion } from '../components/Accordion';

describe('Accordion Component', () => {
  it('expands panel content on click', () => {
    render(<Accordion items={[{ id: 'a1', title: 'Section 1', content: 'Accordion Content' }]} />);
    fireEvent.click(screen.getByRole('button', { name: /section 1/i }));
    expect(screen.getByText('Accordion Content')).toBeInTheDocument();
  });
});