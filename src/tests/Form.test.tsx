import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from '../components/Form';

describe('Form Component', () => {
  it('renders form children', () => {
    render(
      <Form onSubmit={() => {}}>
        {() => <button type="submit">Submit</button>}
      </Form>
    );
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});