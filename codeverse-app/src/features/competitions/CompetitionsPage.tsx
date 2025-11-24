import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const competitions = [
  {
    title: "Head-to-Head Arena",
    description: "1v1 algorithmic duels with rating changes.",
    type: "Head-to-Head",
    entry: "Free",
    cta: "Find Match",
  },
  {
    title: "Team Battle League",
    description: "Compete as a team and climb seasonal ladders.",
    type: "Team Battle",
    entry: "From 200 Coins",
    cta: "View Teams",
  },
  {
    title: "Global Tournament Series",
    description: "Large bracket-style tournaments with big prize pools.",
    type: "Tournament",
    entry: "Varies",
    cta: "View Schedule",
  },
];

// FIX: Variant Map
const typeToVariant = {
  "Head-to-Head": "info",
  "Team Battle": "warning",
  Tournament: "danger",
} as const;

const CompetitionsPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-slate-50">Competitions</h1>
          <p className="mt-2 text-sm text-slate-400 max-w-xl">
            Choose from different competitive modes – from quick 1v1 battles to
            full-scale tournaments.
          </p>
        </div>
        <Button>Go to Find Battle</Button>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {competitions.map((c) => (
          <Card key={c.title} className="flex flex-col gap-3">
            <Badge
              variant={typeToVariant[c.type as keyof typeof typeToVariant]}
              className="w-fit text-[10px] uppercase"
            >
              {c.type}
            </Badge>

            <p className="text-lg font-semibold text-slate-100">{c.title}</p>
            <p className="text-sm text-slate-400">{c.description}</p>
            <p className="mt-1 text-xs text-slate-500">Entry: {c.entry}</p>

            <div className="mt-auto pt-3">
              <Button className="w-full">{c.cta}</Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CompetitionsPage;
