import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SegmentedControl from "@/components/ui/SegmentedControl";
import FilterDropdown from "@/components/ui/FIlterDropdown";
import StatusDot from "@/components/ui/StatusDot";

const FindBattlePage: React.FC = () => {
  const [difficulty, setDifficulty] = useState("Medium");

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 space-y-10">
      {/* Header */}
      <div className="text-center space-y-1">
        <h1 className="text-2xl font-semibold text-white">Find a Battle</h1>
        <p className="text-slate-400 text-sm">
          Challenge another coder in real-time and compete to solve a problem faster.
        </p>
      </div>

      {/* Difficulty Selector */}
      <div className="flex justify-center">
        <SegmentedControl
          options={["Easy", "Medium", "Hard"]}
          value={difficulty}
          onChange={setDifficulty}
        />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FilterDropdown label="Select Topic" />
        <FilterDropdown label="Programming Language" />
      </div>

      {/* Active Users Card */}
      <Card>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-sm font-semibold text-slate-100">Active Users</h2>
            <p className="mt-1 text-xs text-slate-400">
              Players currently available for matchmaking
            </p>
          </div>
          <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
            <StatusDot status="online" />
            250 Online
          </div>
        </div>

        {/* Visual avatars */}
        <div className="mt-4 flex -space-x-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-10 rounded-full bg-slate-700 border-2 border-slate-900"
            />
          ))}
        </div>
      </Card>

      {/* CTA Button */}
      <div className="flex justify-center pt-4">
        <Button size="lg">Find Battle</Button>
      </div>
    </div>
  );
};

export default FindBattlePage;
