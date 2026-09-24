import React from 'react';
import { useForm, FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form';

export interface FormProps<TFieldValues extends FieldValues> {
  onSubmit: SubmitHandler<TFieldValues>;
  children: (methods: UseFormReturn<TFieldValues>) => React.ReactNode;
}

export function Form<TFieldValues extends FieldValues = FieldValues>({
  onSubmit,
  children,
}: FormProps<TFieldValues>) {
  const methods = useForm<TFieldValues>();

  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-4">
      {children(methods)}
    </form>
  );
}