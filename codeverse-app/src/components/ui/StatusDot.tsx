import React from "react";

const StatusDot: React.FC<{ status: "online" | "offline" | "active" | "idle" }> = ({
  status,
}) => {
  const colors: Record<string, string> = {
    online: "bg-emerald-400",
    offline: "bg-slate-500",
    active: "bg-blue-400",
    idle: "bg-amber-400",
  };

  return (
    <span className={`h-2 w-2 rounded-full ${colors[status]}`} />
  );
};

export default StatusDot;
