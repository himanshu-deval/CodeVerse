import React from "react";
import Card from "./Card";

interface StatCardProps {
  label: string;
  value: string | number;
  textColor?: string; // <-- FIXED
}

const StatCard: React.FC<StatCardProps> = ({ label, value, textColor }) => {
  return (
    <Card>
      <p className="mb-1 text-xs uppercase text-slate-400">{label}</p>
      <p className={`text-2xl font-semibold ${textColor ?? "text-slate-50"}`}>
        {value}
      </p>
    </Card>
  );
};

export default StatCard;
