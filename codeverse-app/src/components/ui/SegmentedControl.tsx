import React from "react";

interface SegmentedControlProps {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <div className="flex rounded-lg border border-slate-700 bg-slate-900/70 p-1">
      {options.map((opt) => {
        const active = opt === value;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition ${
              active
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
};

export default SegmentedControl;
