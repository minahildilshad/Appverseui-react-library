import React from 'react';
import type { Meta } from '@storybook/react';
import { Form } from '../components/Form';
import { Button } from '../components/Button';

const meta: Meta<typeof Form> = {
  title: 'AppverseUI/Form',
  component: Form,
  tags: ['autodocs'],
};

export default meta;

export const Default = () => (
  <Form onSubmit={(data) => console.log(data)}>
    {() => (
      <div className="space-y-4">
        <input className="border p-2 rounded w-full" placeholder="Full Name" />
        <Button type="submit">Submit Form</Button>
      </div>
    )}
  </Form>
);