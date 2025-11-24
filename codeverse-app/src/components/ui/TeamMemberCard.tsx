import React from "react";
import Card from "./Card";
import StatusDot from "./StatusDot";

interface TeamMemberCardProps {
  name: string;
  role: string;
  status?: "online" | "offline";
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  status = "online",
}) => {
  return (
    <Card className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-full bg-slate-700" />
        <div>
          <p className="text-sm font-medium text-slate-50">{name}</p>
          <p className="text-xs text-slate-400">{role}</p>
        </div>
      </div>
      <StatusDot status={status} />
    </Card>
  );
};

export default TeamMemberCard;
