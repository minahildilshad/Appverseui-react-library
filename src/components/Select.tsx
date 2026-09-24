import React, { SelectHTMLAttributes, forwardRef, useState } from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  label?: string;
  options: SelectOption[];
  helperText?: string;
  isError?: boolean;
  onChange?: (value: string) => void;
}

/**
 * AppverseUI Select menu with option lists, helper messages, and error states.
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, helperText, isError = false, value, defaultValue, onChange, id, className = '', ...props }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? options[0]?.value ?? '');
    const isControlled = value !== undefined;
    const selectId = id || `select-${Math.random().toString(36).substring(2, 9)}`;

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const val = e.target.value;
      if (!isControlled) setInternalValue(val);
      onChange?.(val);
    };

    return (
      <div className="flex flex-col space-y-1.5 w-full">
        {label && (
          <label htmlFor={selectId} className="text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          value={isControlled ? value : internalValue}
          onChange={handleChange}
          aria-invalid={isError}
          className={`px-3 py-2 border rounded-md text-sm outline-none transition focus:ring-2 bg-white ${
            isError ? 'border-red-500 focus:ring-red-300' : 'border-slate-300 focus:ring-indigo-500'
          } ${className}`}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {helperText && <span className={`text-xs ${isError ? 'text-red-600' : 'text-slate-500'}`}>{helperText}</span>}
      </div>
    );
  }
);

Select.displayName = 'Select';