import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tooltip } from '../components/Tooltip';

describe('Tooltip Component', () => {
  it('displays tooltip text on hover', () => {
    render(<Tooltip content="Tooltip Hint"><button>Hover</button></Tooltip>);
    fireEvent.mouseEnter(screen.getByRole('button'));
    expect(screen.getByRole('tooltip')).toHaveTextContent('Tooltip Hint');
  });
});