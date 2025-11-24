import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import {Tabs} from "@/components/ui/Tabs";
import CompetitionCard from "@/components/ui/CompetiotionCard";
import TeamMemberCard from "@/components/ui/TeamMEmberCard";
import StatusDot from "@/components/ui/StatusDot";

const CompetitionPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 space-y-10">
      {/* PAGE HEADER */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold text-white">
          Team Battle: Algorithm Arena
        </h1>
        <p className="text-slate-400 text-sm">
          Compete against other teams in a multi-round coding challenge.
        </p>
      </div>

      {/* TABS */}
      <Tabs
        items={[
          { value: "overview", label: "Overview" },
          { value: "team", label: "Your Team" },
          { value: "matches", label: "Matches" },
          { value: "rewards", label: "Rewards" },
        ]}
        value={activeTab}
        onChange={setActiveTab}
      />

      {/* TAB CONTENT */}
      {activeTab === "overview" && (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: Team Info */}
          <div className="md:col-span-2 space-y-6">
            {/* TEAM CARD */}
            <Card>
              <h2 className="text-sm font-semibold text-slate-100">
                Your Team
              </h2>
              <p className="text-xs text-slate-400 mt-1">Code Warriors</p>

              <div className="mt-4 space-y-3">
                <TeamMemberCard name="Alex Ryder" role="Lead" status="online" />
                <TeamMemberCard name="Jason Lee" role="Developer" status="online" />
                <TeamMemberCard name="Mia Patel" role="Developer" status="offline" />
                <TeamMemberCard name="Sara Kim" role="Analyst" status="online" />
              </div>

              <div className="mt-4">
                <Button size="md" variant="secondary">
                  Manage Team
                </Button>
              </div>
            </Card>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4">
              <Card>
                <h4 className="text-xs text-slate-400 uppercase">Rank</h4>
                <p className="text-2xl font-semibold text-white mt-2">12</p>
              </Card>
              <Card>
                <h4 className="text-xs text-slate-400 uppercase">Win Rate</h4>
                <p className="text-2xl font-semibold text-emerald-400 mt-2">68%</p>
              </Card>
              <Card>
                <h4 className="text-xs text-slate-400 uppercase">Battles Played</h4>
                <p className="text-2xl font-semibold text-white mt-2">32</p>
              </Card>
            </div>
          </div>

          {/* Right: Active Competitions */}
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-slate-100">
              Active Competitions
            </h2>

            <CompetitionCard
              title="Data Structures Showdown"
              format="Team of 4"
              entry={150}
              prize={50000}
              primary
            />

            <CompetitionCard
              title="Algo Marathon"
              format="Team of 3"
              entry={100}
              prize={25000}
            />

            <CompetitionCard
              title="Dynamic Programming Cup"
              format="Team of 5"
              entry={200}
              prize={80000}
            />
          </div>
        </div>
      )}

      {/* OTHER TABS PLACEHOLDER */}
      {activeTab !== "overview" && (
        <Card>
          <p className="text-sm text-slate-400">
            Content for{" "}
            <span className="text-white font-semibold">{activeTab}</span> will go here.
          </p>
        </Card>
      )}
    </div>
  );
};

export default CompetitionPage;
