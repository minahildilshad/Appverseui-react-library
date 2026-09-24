import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs } from '../components/Tabs';

describe('Tabs Component', () => {
  it('switches tabs on click', () => {
    render(
      <Tabs
        items={[
          { id: 't1', label: 'Tab 1', content: 'First Content' },
          { id: 't2', label: 'Tab 2', content: 'Second Content' },
        ]}
      />
    );
    expect(screen.getByText('First Content')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('tab', { name: /tab 2/i }));
    expect(screen.getByText('Second Content')).toBeInTheDocument();
  });
});