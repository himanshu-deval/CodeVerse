import React from "react";
import Card from "./Card";
import Badge from "./Badge";

interface MatchHistoryItemProps {
  type: "WIN" | "LOSS" | "TEAM" | "TOP 10";
  title: string;
  description: string;
  coins: number;
  rating: number;
}

const badgeVariantMap = {
  WIN: "success",
  TEAM: "info",
  LOSS: "danger",
  "TOP 10": "warning",
} as const;

const MatchHistoryItem: React.FC<MatchHistoryItemProps> = ({
  type,
  title,
  description,
  coins,
  rating,
}) => {
  return (
    <Card className="flex items-center justify-between">
      <div>
        <Badge variant={badgeVariantMap[type]} className="mb-1">
          {type}
        </Badge>

        <p className="text-sm font-medium text-slate-50">{title}</p>
        <p className="text-xs text-slate-400">{description}</p>
      </div>

      <div className="text-right text-xs">
        <p className={coins >= 0 ? "text-emerald-300" : "text-rose-300"}>
          {coins >= 0 ? `+${coins}` : coins} Coins
        </p>
        <p className="text-slate-400">
          Rating: {rating >= 0 ? `+${rating}` : rating}
        </p>
      </div>
    </Card>
  );
};

export default MatchHistoryItem;
