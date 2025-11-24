import React, { useState } from "react";
import Card from "@/components/ui/Card";
import SegmentedControl from "@/components/ui/SegmentedControl";
import FilterDropdown from "@/components/ui/FIlterDropdown";
import PaginationControls from "@/components/ui/PaginationControl";
import Badge from "@/components/ui/Badge";

const PracticePage: React.FC = () => {
  const [difficulty, setDifficulty] = useState("All");
  const [page, setPage] = useState(1);

  const problems = [
    { title: "Two Sum", difficulty: "Easy" },
    { title: "Valid Parentheses", difficulty: "Easy" },
    { title: "Merge Intervals", difficulty: "Medium" },
    { title: "Longest Substring Without Repeating Characters", difficulty: "Medium" },
    { title: "Median of Two Sorted Arrays", difficulty: "Hard" },
    { title: "Word Ladder", difficulty: "Hard" },
  ];

  const difficultyMap = {
    Easy: "success",
    Medium: "warning",
    Hard: "danger",
  } as const;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Practice Arena</h1>
        <p className="text-slate-400 text-sm mt-1">
          Sharpen your skills with curated problems across all levels.
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <FilterDropdown label="Difficulty" />
        <FilterDropdown label="Topic" />
        <FilterDropdown label="Language" />
      </div>

      {/* Difficulty Switch */}
      <div className="flex justify-center">
        <SegmentedControl
          options={["All", "Easy", "Medium", "Hard"]}
          value={difficulty}
          onChange={setDifficulty}
        />
      </div>

      {/* Problem List */}
      <Card className="p-0">
        <div className="divide-y divide-slate-800">
          {problems.map((p) => (
            <div
              key={p.title}
              className="flex items-center justify-between px-4 py-4 hover:bg-slate-800/30"
            >
              <p className="text-slate-200 text-sm">{p.title}</p>
              <Badge
                variant={difficultyMap[p.difficulty as keyof typeof difficultyMap]}
              >
                {p.difficulty}
              </Badge>
            </div>
          ))}
        </div>
      </Card>

      {/* Pagination */}
      <div className="flex justify-center pt-4">
        <PaginationControls current={page} total={5} onChange={setPage} />
      </div>
    </div>
  );
};

export default PracticePage;
