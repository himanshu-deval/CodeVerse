import React from "react";
import clsx from "clsx";

export interface TabItem {
  value: string;
  label: string;
}

interface TabsProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ items, value, onChange, className }) => {
  return (
    <div className={clsx("flex gap-4 border-b border-slate-800", className)}>
      {items.map((tab) => {
        const active = tab.value === value;
        return (
          <button
            key={tab.value}
            onClick={() => onChange(tab.value)}
            className={clsx(
              "pb-2 text-sm font-medium transition-colors",
              active
                ? "text-slate-50 border-b-2 border-blue-500"
                : "text-slate-400 hover:text-slate-200 border-b-2 border-transparent"
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
