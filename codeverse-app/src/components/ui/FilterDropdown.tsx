import React from "react";

interface FilterDropdownProps {
  label: string;
  className?: string;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, className }) => {
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-3 py-2 text-sm text-slate-200 hover:bg-slate-800 ${className}`}
    >
      {label}
      <span className="text-xs text-slate-400">▾</span>
    </button>
  );
};

export default FilterDropdown;
