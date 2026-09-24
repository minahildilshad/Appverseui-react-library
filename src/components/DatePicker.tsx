import React, { useState } from 'react';

export interface DatePickerProps {
  label?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (date: string) => void;
}

/**
 * AppverseUI DatePicker component supporting controlled and uncontrolled usage.
 */
export const DatePicker: React.FC<DatePickerProps> = ({ label, value, defaultValue = '', onChange }) => {
  const [internalDate, setInternalDate] = useState(defaultValue);
  const isControlled = value !== undefined;
  const inputId = `date-picker-${Math.random().toString(36).substring(2, 9)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!isControlled) setInternalDate(val);
    onChange?.(val);
  };

  return (
    <div className="flex flex-col space-y-1.5 w-full">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        type="date"
        value={isControlled ? value : internalDate}
        onChange={handleChange}
        className="px-3 py-2 border border-slate-300 rounded-md text-sm outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
      />
    </div>
  );
};