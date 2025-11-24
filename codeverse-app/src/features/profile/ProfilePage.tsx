import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";
import Badge from "@/components/ui/Badge";
import ProgressBar from "@/components/ui/ProgressBar";
import Avatar from "@/components/ui/Avatar";

const ProfilePage: React.FC = () => {
  const [tab, setTab] = useState("overview");

  const matchBadgeVariant = {
    WIN: "success",
    TEAM: "info",
    LOSS: "danger",
    "TOP 10": "warning",
  } as const;

  const matchHistory = [
    {
      type: "WIN",
      title: "Head-to-Head vs. CoderX",
      subtitle: "Algorithm Challenge · 2 days ago",
      coins: "+50 Coins",
      rating: "+15",
    },
    {
      type: "TEAM",
      title: "Team Battle: 'Code Warriors'",
      subtitle: "Team placed 3rd · 5 days ago",
      coins: "+250 Coins",
      rating: "+20",
    },
    {
      type: "LOSS",
      title: "Head-to-Head vs. LogicMaster",
      subtitle: "Data Structures Duel · 1 week ago",
      coins: "-20 Coins",
      rating: "-12",
    },
    {
      type: "TOP 10",
      title: "Tournament: 'Global Code Sprint'",
      subtitle: "Ranked 8th/500 · 2 weeks ago",
      coins: "+1000 Coins",
      rating: "+45",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <Avatar name="Alex Ryder" size="lg" />
          <div>
            <h1 className="text-2xl font-semibold text-slate-50">Alex Ryder</h1>
            <p className="text-sm text-slate-400">Software Engineer · Competitive Coder</p>
            <p className="mt-1 text-xs text-slate-500">Joined 2021</p>
          </div>
        </div>
        <Button>Edit Profile</Button>
      </div>

      {/* Tabs */}
      <Tabs
        items={[
          { value: "overview", label: "Overview" },
          { value: "matches", label: "Match History" },
          { value: "practice", label: "Practice" },
          { value: "submissions", label: "Submissions" },
          { value: "achievements", label: "Achievements" },
        ]}
        value={tab}
        onChange={setTab}
      />

      {/* OVERVIEW TAB */}
      {tab === "overview" && (
        <div className="space-y-8">
          {/* Stats row */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <h3 className="text-xs uppercase tracking-wide text-slate-400">
                Current Balance
              </h3>
              <p className="mt-3 text-3xl font-semibold text-slate-50">12,500</p>
            </Card>

            <Card>
              <h3 className="text-xs uppercase tracking-wide text-slate-400">
                Total Earned
              </h3>
              <p className="mt-3 text-3xl font-semibold text-emerald-400">
                56,800
              </p>
            </Card>

            <Card>
              <h3 className="text-xs uppercase tracking-wide text-slate-400">
                Coin Achievements
              </h3>
              <p className="mt-3 text-3xl font-semibold text-purple-400">8</p>
            </Card>
          </div>

          {/* Main content grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {/* Match history */}
            <Card>
              <h2 className="text-sm font-semibold text-slate-100">Match History</h2>

              <div className="mt-4 space-y-3">
                {matchHistory.map((match) => (
                  <div
                    key={match.title}
                    className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-3"
                  >
                    <div className="flex flex-col gap-1">
                      <Badge
                        variant={matchBadgeVariant[match.type as keyof typeof matchBadgeVariant]}
                        className="w-fit text-[10px]"
                      >
                        {match.type}
                      </Badge>

                      <p className="text-sm font-medium text-slate-100">
                        {match.title}
                      </p>
                      <p className="text-xs text-slate-400">{match.subtitle}</p>
                    </div>

                    <div className="text-right text-xs font-semibold">
                      <p
                        className={
                          match.coins.startsWith("+")
                            ? "text-emerald-400"
                            : "text-rose-400"
                        }
                      >
                        {match.coins}
                      </p>
                      <p className="mt-1 text-slate-400">Rating {match.rating}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Practice stats */}
            <div className="space-y-4">
              <Card>
                <h2 className="text-sm font-semibold text-slate-100">Practice Statistics</h2>

                <p className="mt-3 text-xs text-slate-400">Problems Solved</p>
                <p className="mt-1 text-3xl font-semibold text-slate-50">258</p>
                <p className="mt-1 text-xs text-slate-500">problems</p>

                <div className="mt-4">
                  <ProgressBar value={75} />
                </div>
              </Card>

              <Card>
                <h3 className="text-xs uppercase tracking-wide text-slate-400">
                  Solved by Difficulty
                </h3>

                <div className="mt-3 space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-emerald-400">Easy</span>
                    <span className="text-slate-100">150</span>
                  </p>

                  <p className="flex justify-between">
                    <span className="text-amber-400">Medium</span>
                    <span className="text-slate-100">92</span>
                  </p>

                  <p className="flex justify-between">
                    <span className="text-rose-400">Hard</span>
                    <span className="text-slate-100">16</span>
                  </p>
                </div>
              </Card>

              <Card>
                <h3 className="text-xs uppercase tracking-wide text-slate-400">
                  Recently Completed Problems
                </h3>

                <div className="mt-3 space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-100">Two Sum</span>
                    <span className="text-emerald-400 text-xs">Easy</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-100">
                      Longest Substring Without Repeating Characters
                    </span>
                    <span className="text-amber-400 text-xs">Medium</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      )}

      {/* OTHER TABS */}
      {tab !== "overview" && (
        <Card>
          <p className="text-sm text-slate-400">
            Content for <span className="font-semibold text-white">{tab}</span> will go here.
          </p>
        </Card>
      )}
    </div>
  );
};

export default ProfilePage;
