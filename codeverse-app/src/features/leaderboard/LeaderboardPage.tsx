import React, { useState } from "react";
import PageHeader from "@/components/ui/PageHeader";
import FilterDropdown from "@/components/ui/FIlterDropdown";
import Card from "@/components/ui/Card";
import Table from "@/components/ui/Table";

const mockLeaderboard = [
  { rank: 1, name: "Alex Turner", country: "USA", coins: 12500, comps: 15 },
  { rank: 2, name: "Olivia Bennett", country: "Canada", coins: 12000, comps: 14 },
  { rank: 3, name: "Ethan Carter", country: "UK", coins: 11800, comps: 12 },
  { rank: 4, name: "Sophia Davis", country: "Australia", coins: 11500, comps: 11 },
  { rank: 5, name: "Liam Evans", country: "Germany", coins: 11000, comps: 10 },
  { rank: 6, name: "Ava Foster", country: "India", coins: 10800, comps: 9 },
  { rank: 7, name: "Noah Green", country: "Brazil", coins: 10500, comps: 9 },
  { rank: 8, name: "Isabella Harris", country: "Japan", coins: 10200, comps: 8 },
  { rank: 9, name: "Jackson Ingram", country: "France", coins: 10000, comps: 8 },
  { rank: 10, name: "Mia Jenkins", country: "South Korea", coins: 9800, comps: 7 },
];

const LeaderboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Individual");

  return (
    <div className="px-8 py-6 space-y-8">
      <PageHeader
        title="Rankings"
        subtitle="Track your progress and see where you stand in the CodeVerse community."
      />

      {/* Tabs */}
      <div className="flex gap-6 text-sm border-b border-slate-800">
        {["Individual", "Team Battle", "Tournaments"].map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`pb-3 ${
              activeTab === t
                ? "border-b-2 border-blue-500 text-white"
                : "text-slate-400"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <FilterDropdown label="Total Coin Balance" />
        <FilterDropdown label="All Competitions" />
        <FilterDropdown label="All Time" />
      </div>

      {/* Table */}
      <Card className="p-0">
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Th>Rank</Table.Th>
              <Table.Th>User</Table.Th>
              <Table.Th>Country</Table.Th>
              <Table.Th>Coins Earned</Table.Th>
              <Table.Th>Competitions</Table.Th>
            </Table.Row>
          </Table.Head>

          <Table.Body>
            {mockLeaderboard.map((row) => (
              <Table.Row key={row.rank}>
                <Table.Td>{row.rank}</Table.Td>
                <Table.Td>{row.name}</Table.Td>
                <Table.Td>{row.country}</Table.Td>
                <Table.Td>{row.coins.toLocaleString()}</Table.Td>
                <Table.Td>{row.comps}</Table.Td>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>
    </div>
  );
};

export default LeaderboardPage;
