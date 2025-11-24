import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/features/auth/authSlice';

interface MatchHistoryItem {
  id: number;
  type: 'WIN' | 'LOSS' | 'TEAM' | 'TOP 10';
  title: string;
  description: string;
  coinsChange: string;
  ratingChange: string;
  date: string;
}

const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const user = useSelector(selectUser);

  // Mock data for user statistics
  const statsData = {
    coins: 12500,
    totalEarned: 56800,
    achievements: 8,
    problemsSolved: 258,
    easySolved: 150,
    mediumSolved: 92,
    hardSolved: 16
  };

  // Mock match history data
  const matchHistory: MatchHistoryItem[] = [
    { id: 1, type: 'WIN', title: 'Head-to-Head vs. CoderX', description: 'Algorithm Challenge - 2 days ago', coinsChange: '+50 Coins', ratingChange: 'Rating: +15', date: '2 days ago' },
    { id: 2, type: 'TEAM', title: 'Team Battle: \'Code Warriors\'', description: 'Team placed 3rd - 5 days ago', coinsChange: '+250 Coins', ratingChange: 'Team Rating: +20', date: '5 days ago' },
    { id: 3, type: 'LOSS', title: 'Head-to-Head vs. LogicMaster', description: 'Data Structures Duel - 1 week ago', coinsChange: '-20 Coins', ratingChange: 'Rating: -12', date: '1 week ago' },
    { id: 4, type: 'TOP 10', title: 'Tournament: \'Global Code Sprint\'', description: 'Ranked 8th/500 - 2 weeks ago', coinsChange: '+1000 Coins', ratingChange: 'Rating: +45', date: '2 weeks ago' }
  ];

  // Recent problems data
  const recentProblems = [
    { title: 'Two Sum', difficulty: 'Easy' },
    { title: 'Longest Substring Without Repeating Characters', difficulty: 'Medium' }
  ];

  return (
    <div className="w-full">
      <div className="flex p-4">
        <div className="flex w-full flex-col gap-4">
          <div className="flex gap-4">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJCg3tQPOGOf0CPPI1RUw7NFNNrfmncq2ql7Jx6kNhGOaVCN2AcwT6IF2OTX7q-J7eKsByb5LFGZYrIWd30CTkd1JjmOtPp0DbPg_m_VQKA53VnbegYXKuNppLGofdHoKMMNjWIORgylpvOFG9xQ7jof_tUN99i8O_nu1kwJ7KBI7-uPeB4YTTj7MN5Z93HRN99l12WZIjyr8QyNlA02JdU-y4ce6o8tAQ9O1vsPE5eDIRkT3P5QvnKI88StxUcb4FKZMyv4nnwFM")'}}></div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">{user?.name || 'Guest User'}</p>
              <p className="text-slate-400 text-base font-normal leading-normal">Software Engineer | Competitive Coder</p>
              <p className="text-slate-400 text-base font-normal leading-normal">Joined 2021</p>
            </div>
          </div>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white/10 hover:bg-white/20 text-white text-sm font-bold leading-normal tracking-[0.015em] w-full max-w-[480px]">
            <span className="truncate">Edit Profile</span>
          </button>
        </div>
      </div>

      <div className="pb-3">
        <div className="flex border-b border-white/10 px-4 gap-8">
          <button 
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 border-b-[3px] ${activeTab === 'overview' ? 'border-b-white text-white' : 'border-b-transparent text-slate-400'}`}
            onClick={() => setActiveTab('overview')}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Overview</p>
          </button>
          <button 
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 border-b-[3px] ${activeTab === 'matchHistory' ? 'border-b-white text-white' : 'border-b-transparent text-slate-400'}`}
            onClick={() => setActiveTab('matchHistory')}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Match History</p>
          </button>
          <button 
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 border-b-[3px] ${activeTab === 'practice' ? 'border-b-white text-white' : 'border-b-transparent text-slate-400'}`}
            onClick={() => setActiveTab('practice')}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Practice</p>
          </button>
          <button 
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 border-b-[3px] ${activeTab === 'submissions' ? 'border-b-white text-white' : 'border-b-transparent text-slate-400'}`}
            onClick={() => setActiveTab('submissions')}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Submissions</p>
          </button>
          <button 
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 border-b-[3px] ${activeTab === 'achievements' ? 'border-b-white text-white' : 'border-b-transparent text-slate-400'}`}
            onClick={() => setActiveTab('achievements')}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">Achievements</p>
          </button>
        </div>
      </div>

      <div className="p-4 space-y-8">
        <section>
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Coin Balance & Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2 rounded-lg border border-white/10 p-4 items-start bg-gray-800">
              <p className="text-slate-400 text-sm font-normal leading-normal">Current Balance</p>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-yellow-400 text-3xl">toll</span>
                <p className="text-white tracking-light text-3xl font-bold leading-tight">{statsData.coins}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-lg border border-white/10 p-4 items-start bg-gray-800">
              <p className="text-slate-400 text-sm font-normal leading-normal">Total Earned</p>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-400 text-3xl">trending_up</span>
                <p className="text-white tracking-light text-3xl font-bold leading-tight">{statsData.totalEarned}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 rounded-lg border border-white/10 p-4 items-start bg-gray-800">
              <p className="text-slate-400 text-sm font-normal leading-normal">Coin Achievements</p>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-purple-400 text-3xl">emoji_events</span>
                <p className="text-white tracking-light text-3xl font-bold leading-tight">{statsData.achievements}</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Match History</h3>
          <div className="flex flex-col gap-3">
            {matchHistory.map((match) => (
              <div key={match.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-3 rounded-lg border border-white/10 bg-gray-800">
                <span className={`font-bold text-sm px-2 py-0.5 rounded ${
                  match.type === 'WIN' ? 'text-green-400 bg-green-900/50' : 
                  match.type === 'LOSS' ? 'text-red-400 bg-red-900/50' : 
                  match.type === 'TEAM' ? 'text-blue-400 bg-blue-900/50' : 
                  'text-yellow-400 bg-yellow-900/50'
                }`}>
                  {match.type}
                </span>
                <div className="text-white">
                  <p className="font-bold">{match.title}</p>
                  <p className="text-xs text-slate-400">{match.description}</p>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${match.coinsChange.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{match.coinsChange}</p>
                  <p className="text-xs text-slate-400">{match.ratingChange}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-4">Practice Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 rounded-lg border border-white/10 p-4 bg-gray-800">
              <p className="text-slate-400 text-sm font-normal">Problems Solved</p>
              <div className="flex items-baseline gap-2">
                <p className="text-white tracking-light text-4xl font-bold leading-tight">{statsData.problemsSolved}</p>
                <p className="text-slate-400 text-base">problems</p>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 p-4 bg-gray-800">
              <p className="text-slate-400 text-sm font-normal mb-2">Solved by Difficulty</p>
              <div className="flex justify-between items-center py-1">
                <p className="text-green-400">Easy</p>
                <p className="text-white font-mono">{statsData.easySolved}</p>
              </div>
              <div className="flex justify-between items-center py-1">
                <p className="text-yellow-400">Medium</p>
                <p className="text-white font-mono">{statsData.mediumSolved}</p>
              </div>
              <div className="flex justify-between items-center py-1">
                <p className="text-red-400">Hard</p>
                <p className="text-white font-mono">{statsData.hardSolved}</p>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="text-white text-md font-bold leading-tight mb-3">Recently Completed Problems</h4>
            <div className="flex flex-col gap-2">
              {recentProblems.map((problem, index) => (
                <div key={index} className="flex justify-between items-center p-3 rounded-md bg-white/5">
                  <p className="text-white">{problem.title}</p>
                  <span className={`text-sm font-bold ${
                    problem.difficulty === 'Easy' ? 'text-green-400' : 
                    problem.difficulty === 'Medium' ? 'text-yellow-400' : 
                    'text-red-400'
                  }`}>
                    {problem.difficulty}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfilePage;