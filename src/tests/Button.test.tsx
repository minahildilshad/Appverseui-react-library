import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../components/Button';

describe('AppverseUI Button Component', () => {
  it('renders button with correct text children', () => {
    render(<Button>Click Me</Button>);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('triggers onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Submit</Button>);

    const buttonElement = screen.getByRole('button', { name: /submit/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('does not trigger onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);

    const buttonElement = screen.getByRole('button', { name: /disabled/i });
    fireEvent.click(buttonElement);

    expect(handleClick).not.toHaveBeenCalled();
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveAttribute('aria-disabled', 'true');
  });

  it('displays loading state and prevents interaction when isLoading is true', () => {
    const handleClick = jest.fn();
    render(<Button isLoading onClick={handleClick}>Save</Button>);

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent(/loading/i);
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveAttribute('aria-disabled', 'true');

    fireEvent.click(buttonElement);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('applies default primary variant and medium size styles', () => {
    render(<Button>Default Button</Button>);
    const buttonElement = screen.getByRole('button', { name: /default button/i });

    expect(buttonElement).toHaveClass('bg-indigo-600');
    expect(buttonElement).toHaveClass('px-4');
    expect(buttonElement).toHaveClass('py-2');
  });

  it('applies custom danger variant and large size styles', () => {
    render(<Button variant="danger" size="lg">Delete</Button>);
    const buttonElement = screen.getByRole('button', { name: /delete/i });

    expect(buttonElement).toHaveClass('bg-red-600');
    expect(buttonElement).toHaveClass('px-6');
    expect(buttonElement).toHaveClass('py-3');
  });

  it('correctly forwards ref to the native DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Ref Target</Button>);

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe('BUTTON');
  });
});