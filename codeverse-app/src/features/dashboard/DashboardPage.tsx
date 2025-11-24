import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import ProgressBar from "@/components/ui/ProgressBar";

const DashboardPage: React.FC = () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-10">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-white">Welcome back, Alex 👋</h1>
        <p className="text-slate-400 text-sm mt-1">
          Here’s an overview of your progress and ongoing challenges.
        </p>
      </div>

      {/* QUICK STATS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <p className="text-xs uppercase text-slate-400">Coins Earned</p>
          <p className="text-3xl font-semibold text-emerald-400 mt-2">12,500</p>
        </Card>

        <Card>
          <p className="text-xs uppercase text-slate-400">Problems Solved</p>
          <p className="text-3xl font-semibold text-slate-50 mt-2">258</p>
        </Card>

        <Card>
          <p className="text-xs uppercase text-slate-400">Win Rate</p>
          <p className="text-3xl font-semibold text-blue-400 mt-2">68%</p>
        </Card>

        <Card>
          <p className="text-xs uppercase text-slate-400">Team Rank</p>
          <p className="text-3xl font-semibold text-yellow-300 mt-2">#12</p>
        </Card>
      </div>

      {/* GRID: RECENT ACTIVITY + UPCOMING COMPETITIONS */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* RECENT ACTIVITY */}
        <Card className="lg:col-span-2">
          <h2 className="text-sm font-semibold text-slate-100">Recent Activity</h2>

          <div className="mt-4 space-y-4">
            {[
              {
                title: "Solved ‘Two Sum’",
                subtitle: "Easy · 3 hours ago",
                difficulty: "success",
              },
              {
                title: "Completed Team Battle",
                subtitle: "Placed 3rd · 2 days ago",
                difficulty: "info",
              },
              {
                title: "Submitted solution to ‘Merge Intervals’",
                subtitle: "Medium · 5 days ago",
                difficulty: "warning",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-3"
              >
                <div>
                  <p className="text-sm text-slate-100">{item.title}</p>
                  <p className="text-xs text-slate-400">{item.subtitle}</p>
                </div>
                <Badge variant={item.difficulty as any} className="text-[10px]">
                  {item.subtitle.split("·")[0]}
                </Badge>
              </div>
            ))}
          </div>
        </Card>

        {/* UPCOMING COMPETITIONS */}
        <Card>
          <h2 className="text-sm font-semibold text-slate-100">
            Upcoming Competitions
          </h2>

          <div className="mt-4 space-y-4">
            {[
              {
                title: "Data Structures Showdown",
                date: "Starts in 2 days",
                entry: 100,
              },
              {
                title: "Algo Sprint Marathon",
                date: "Starts in 5 days",
                entry: 150,
              },
              {
                title: "Dynamic Programming Cup",
                date: "Starts in 1 week",
                entry: 200,
              },
            ].map((comp) => (
              <div
                key={comp.title}
                className="rounded-lg border border-slate-800 bg-slate-900/60 p-3"
              >
                <p className="text-sm text-slate-100">{comp.title}</p>
                <p className="text-xs text-slate-400">{comp.date}</p>

                <div className="mt-2 flex justify-between items-center">
                  <p className="text-xs text-slate-400">
                    Entry:{" "}
                    <span className="text-slate-200">{comp.entry} Coins</span>
                  </p>
                  <Button size="sm">Join</Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* SUGGESTED PRACTICE */}
      <Card>
        <h2 className="text-sm font-semibold text-slate-100">
          Suggested Practice
        </h2>

        <div className="mt-4 space-y-3">
          {[
            { title: "Rotate Array", difficulty: "Easy", color: "success" },
            { title: "Group Anagrams", difficulty: "Medium", color: "warning" },
            { title: "Maximal Rectangle", difficulty: "Hard", color: "danger" },
          ].map((p) => (
            <div
              key={p.title}
              className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/60 p-3"
            >
              <p className="text-sm text-slate-100">{p.title}</p>
              <Badge variant={p.color as any}>{p.difficulty}</Badge>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default DashboardPage;
