import React, { useState } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  activeTabId?: string;
  defaultTabId?: string;
  onTabChange?: (id: string) => void;
}

/**
 * AppverseUI Tabs switcher component using full ARIA tab list standards.
 */
export const Tabs: React.FC<TabsProps> = ({ items, activeTabId, defaultTabId, onTabChange }) => {
  const [internalTab, setInternalTab] = useState(defaultTabId || items[0]?.id);
  const currentTab = activeTabId !== undefined ? activeTabId : internalTab;

  const handleSelect = (id: string) => {
    if (activeTabId === undefined) setInternalTab(id);
    onTabChange?.(id);
  };

  return (
    <div className="w-full">
      <div className="flex border-b border-slate-200" role="tablist">
        {items.map((tab) => {
          const isSelected = tab.id === currentTab;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => handleSelect(tab.id)}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${
                isSelected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="py-4" role="tabpanel">
        {items.find((item) => item.id === currentTab)?.content}
      </div>
    </div>
  );
};