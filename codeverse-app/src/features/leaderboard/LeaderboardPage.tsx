import React, { useState } from 'react';

interface LeaderboardEntry {
  id: number;
  rank: number;
  username: string;
  country: string;
  coins: number;
  competitions: number;
}

const LeaderboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [timeFilter, setTimeFilter] = useState('all-time');
  const [competitionFilter, setCompetitionFilter] = useState('all');
  const [balanceFilter, setBalanceFilter] = useState('total');

  // Sample leaderboard data
  const leaderboardData: LeaderboardEntry[] = [
    { id: 1, rank: 1, username: 'Alex Turner', country: 'USA', coins: 12500, competitions: 15 },
    { id: 2, rank: 2, username: 'Olivia Bennett', country: 'Canada', coins: 12000, competitions: 14 },
    { id: 3, rank: 3, username: 'Ethan Carter', country: 'UK', coins: 11800, competitions: 12 },
    { id: 4, rank: 4, username: 'Sophia Davis', country: 'Australia', coins: 11500, competitions: 11 },
    { id: 5, rank: 5, username: 'Liam Evans', country: 'Germany', coins: 11000, competitions: 10 },
    { id: 6, rank: 6, username: 'Ava Foster', country: 'India', coins: 10800, competitions: 9 },
    { id: 7, rank: 7, username: 'Noah Green', country: 'Brazil', coins: 10500, competitions: 9 },
    { id: 8, rank: 8, username: 'Isabella Harris', country: 'Japan', coins: 10200, competitions: 8 },
    { id: 9, rank: 9, username: 'Jackson Ingram', country: 'France', coins: 10000, competitions: 8 },
    { id: 10, rank: 10, username: 'Mia Jenkins', country: 'South Korea', coins: 9800, competitions: 7 },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-white tracking-light text-[32px] font-bold leading-tight">Rankings</p>
          <p className="text-slate-400 text-sm font-normal leading-normal">Track your progress and see where you stand in the CodeVerse community.</p>
        </div>
      </div>

      <div className="pb-3">
        <div className="flex border-b border-white/10 px-4 gap-8">
          <button 
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 border-b-[3px] ${activeTab === 'individual' ? 'border-b-white text-white' : 'border-b-transparent text-slate-400 hover:text-white'}`}
            onClick={() => setActiveTab('individual')}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Individual</p>
          </button>
          <button 
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 border-b-[3px] ${activeTab === 'team' ? 'border-b-white text-white' : 'border-b-transparent text-slate-400 hover:text-white'}`}
            onClick={() => setActiveTab('team')}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Team Battle</p>
          </button>
          <button 
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 border-b-[3px] ${activeTab === 'tournament' ? 'border-b-white text-white' : 'border-b-transparent text-slate-400 hover:text-white'}`}
            onClick={() => setActiveTab('tournament')}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Tournaments</p>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3 p-3 flex-wrap pr-4">
        <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-white/5 px-4">
          <p className="text-white text-sm font-medium leading-normal">Total Coin Balance</p>
          <span className="material-symbols-outlined text-base text-white">expand_more</span>
        </div>
        <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-white/5 px-4">
          <p className="text-white text-sm font-medium leading-normal">All Competitions</p>
          <span className="material-symbols-outlined text-base text-white">expand_more</span>
        </div>
        <div className="flex h-8 shrink-0 cursor-pointer items-center justify-center gap-x-2 rounded-lg bg-white/5 px-4">
          <p className="text-white text-sm font-medium leading-normal">All Time</p>
          <span className="material-symbols-outlined text-base text-white">expand_more</span>
        </div>
      </div>

      <div className="px-4 py-3">
        <div className="flex overflow-hidden rounded-lg border border-white/10 bg-gray-900">
          <table className="flex-1">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-3 text-left text-white w-[10%] text-sm font-medium leading-normal">Rank</th>
                <th className="px-4 py-3 text-left text-white w-[30%] text-sm font-medium leading-normal">User</th>
                <th className="px-4 py-3 text-left text-white w-[20%] text-sm font-medium leading-normal">Country</th>
                <th className="px-4 py-3 text-left text-white w-[20%] text-sm font-medium leading-normal">Coins Earned</th>
                <th className="px-4 py-3 text-left text-white w-[20%] text-sm font-medium leading-normal">Competitions</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((entry) => (
                <tr key={entry.id} className="border-t border-t-white/10">
                  <td className="px-4 py-4 w-[10%] text-slate-400 text-sm font-normal leading-normal">{entry.rank}</td>
                  <td className="px-4 py-4 w-[30%] text-white text-sm font-normal leading-normal">{entry.username}</td>
                  <td className="px-4 py-4 w-[20%] text-slate-400 text-sm font-normal leading-normal">{entry.country}</td>
                  <td className="px-4 py-4 w-[20%] text-slate-400 text-sm font-normal leading-normal">{entry.coins}</td>
                  <td className="px-4 py-4 w-[20%] text-slate-400 text-sm font-normal leading-normal">{entry.competitions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;