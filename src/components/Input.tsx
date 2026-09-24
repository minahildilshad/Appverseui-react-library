import React, { InputHTMLAttributes, forwardRef, useState } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  isError?: boolean;
}

/**
 * AppverseUI Accessible Input component with controlled/uncontrolled state support.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, isError = false, value, defaultValue, onChange, id, className = '', ...props }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const isControlled = value !== undefined;
    const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalValue(e.target.value);
      onChange?.(e);
    };

    return (
      <div className="flex flex-col space-y-1.5 w-full">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          value={isControlled ? value : internalValue}
          onChange={handleChange}
          aria-invalid={isError}
          aria-describedby={helperText ? `${inputId}-helper` : undefined}
          className={`px-3 py-2 border rounded-md text-sm outline-none transition focus:ring-2 ${
            isError ? 'border-red-500 focus:ring-red-300' : 'border-slate-300 focus:ring-indigo-500'
          } ${className}`}
          {...props}
        />
        {helperText && (
          <span id={`${inputId}-helper`} className={`text-xs ${isError ? 'text-red-600' : 'text-slate-500'}`}>
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';