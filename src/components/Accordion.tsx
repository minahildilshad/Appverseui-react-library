import React, { useState } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  expandedIds?: string[];
  defaultExpandedIds?: string[];
  allowMultiple?: boolean;
  onChange?: (ids: string[]) => void;
}

/**
 * AppverseUI Accordion component supporting single or multiple panel expansion,
 * as well as controlled and uncontrolled state management.
 */
export const Accordion: React.FC<AccordionProps> = ({
  items,
  expandedIds,
  defaultExpandedIds = [],
  allowMultiple = false,
  onChange,
}) => {
  const [internalExpanded, setInternalExpanded] = useState<string[]>(defaultExpandedIds);
  const isControlled = expandedIds !== undefined;
  const activeIds = isControlled ? expandedIds : internalExpanded;

  const handleToggle = (id: string) => {
    let nextIds: string[];
    if (activeIds.includes(id)) {
      nextIds = activeIds.filter((item) => item !== id);
    } else {
      nextIds = allowMultiple ? [...activeIds, id] : [id];
    }
    if (!isControlled) setInternalExpanded(nextIds);
    onChange?.(nextIds);
  };

  return (
    <div className="border border-slate-200 rounded-lg divide-y divide-slate-200">
      {items.map((item) => {
        const isOpen = activeIds.includes(item.id);
        const headerId = `accordion-header-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id} className="overflow-hidden">
            <button
              id={headerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => handleToggle(item.id)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-sm font-medium text-slate-800 bg-slate-50 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <span>{item.title}</span>
              <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={headerId} className="px-4 py-3 text-sm text-slate-600 bg-white">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};