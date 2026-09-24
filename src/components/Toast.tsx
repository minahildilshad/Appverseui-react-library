import React, { useEffect } from 'react';

export interface ToastProps {
  id: string;
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
  onClose: (id: string) => void;
}

/**
 * AppverseUI Toast alert banner utilizing ARIA live region for accessibility.
 */
export const Toast: React.FC<ToastProps> = ({ id, message, type = 'info', duration = 3000, onClose }) => {
  useEffect(() => {
    if (duration <= 0) return;
    const timer = setTimeout(() => onClose(id), duration);
    return () => clearTimeout(timer);
  }, [id, duration, onClose]);

  const styles = {
    success: 'bg-emerald-50 border-emerald-500 text-emerald-800',
    error: 'bg-rose-50 border-rose-500 text-rose-800',
    info: 'bg-sky-50 border-sky-500 text-sky-800',
    warning: 'bg-amber-50 border-amber-500 text-amber-800',
  };

  return (
    <div role="status" aria-live="polite" className={`flex items-center justify-between border-l-4 p-4 rounded-r shadow-md min-w-[280px] ${styles[type]}`}>
      <span className="text-sm font-medium">{message}</span>
      <button type="button" onClick={() => onClose(id)} className="ml-4 text-xs font-bold hover:opacity-75 focus:outline-none" aria-label="Dismiss">
        ✕
      </button>
    </div>
  );
};