import React from "react";
import Card from "./Card";

interface ProblemIOCardProps {
  label: string;
  value?: string;
  onChange?: (v: string) => void;
  readOnly?: boolean;
  placeholder?: string;
}

const ProblemIOCard: React.FC<ProblemIOCardProps> = ({
  label,
  value,
  onChange,
  readOnly = false,
  placeholder,
}) => {
  return (
    <Card className="h-40">
      <p className="mb-2 text-xs uppercase text-slate-400">{label}</p>
      <textarea
        className="h-full w-full resize-none border-none bg-transparent text-sm text-slate-100 outline-none"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        readOnly={readOnly}
        placeholder={placeholder}
      />
    </Card>
  );
};

export default ProblemIOCard;
