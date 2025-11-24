import React from "react";

interface ProgressBarProps {
  value: number; // 0-100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className="h-2 w-full rounded-full bg-slate-800">
      <div
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        className="h-full rounded-full bg-blue-500 transition-all"
      />
    </div>
  );
};

export default ProgressBar;
