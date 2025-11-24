import React from "react";
import Card from "./Card";
import Button from "./Button";


interface CompetitionCardProps {
  title: string;
  format: string;
  entry: number;
  prize: number;
  primary?: boolean;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({
  title,
  format,
  entry,
  prize,
  primary = false,
}) => {
  return (
    <Card className="flex flex-col justify-between">
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-slate-50">{title}</h4>
        <div className="text-xs text-slate-300 space-y-1">
          <div>👥 Team Format: {format}</div>
          <div>💰 Entry: {entry} Coins</div>
          <div>🏆 Prize Pool: {prize.toLocaleString()} Coins</div>
        </div>
      </div>

      <div className="mt-4">
        {primary ? (
          <Button className="w-full">Register Team</Button>
        ) : (
          <Button variant="secondary" className="w-full">
            View Details
          </Button>
        )}
      </div>
    </Card>
  );
};

export default CompetitionCard;
