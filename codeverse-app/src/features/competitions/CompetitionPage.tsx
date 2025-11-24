import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockCompetitions } from '@/services/mockData';

interface CompetitionPageProps {}

const CompetitionPage: React.FC = () => {
  const { competitionId } = useParams<{ competitionId: string }>();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Find the competition based on ID
  const competition = mockCompetitions.find(comp => comp.id === competitionId);
  
  if (!competition) {
    return <div className="text-white p-4">Competition not found</div>;
  }

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between items-center gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">{competition.title}</p>
          <p className="text-slate-400 text-base font-normal leading-normal">{competition.description}</p>
        </div>
      </div>
      
      <div className="pb-3 mt-4">
        <div className="flex border-b border-white/10 px-4 gap-8">
          <button 
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 border-b-[3px] ${activeTab === 'overview' ? 'border-b-blue-500 text-white' : 'border-b-transparent text-slate-400 hover:text-white'}`}
            onClick={() => setActiveTab('overview')}
          >
            <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">Overview</p>
          </button>
          <button 
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 border-b-[3px] ${activeTab === 'problems' ? 'border-b-blue-500 text-white' : 'border-b-transparent text-slate-400 hover:text-white'}`}
            onClick={() => setActiveTab('problems')}
          >
            <p className="text-slate-400 hover:text-white text-sm font-bold leading-normal tracking-[0.015em]">Problems</p>
          </button>
          <button 
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 border-b-[3px] ${activeTab === 'leaderboard' ? 'border-b-blue-500 text-white' : 'border-b-transparent text-slate-400 hover:text-white'}`}
            onClick={() => setActiveTab('leaderboard')}
          >
            <p className="text-slate-400 hover:text-white text-sm font-bold leading-normal tracking-[0.015em]">Leaderboard</p>
          </button>
          <button 
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 border-b-[3px] ${activeTab === 'submissions' ? 'border-b-blue-500 text-white' : 'border-b-transparent text-slate-400 hover:text-white'}`}
            onClick={() => setActiveTab('submissions')}
          >
            <p className="text-slate-400 hover:text-white text-sm font-bold leading-normal tracking-[0.015em]">Submissions</p>
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h2 className="text-white text-2xl font-bold mb-4">Competition Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg border border-white/10 p-6">
            <h3 className="text-lg font-bold text-white mb-2">Start Time</h3>
            <p className="text-slate-300">{competition.startTime}</p>
          </div>
          <div className="bg-white/5 rounded-lg border border-white/10 p-6">
            <h3 className="text-lg font-bold text-white mb-2">Duration</h3>
            <p className="text-slate-300">{competition.duration}</p>
          </div>
          <div className="bg-white/5 rounded-lg border border-white/10 p-6">
            <h3 className="text-lg font-bold text-white mb-2">Participants</h3>
            <p className="text-slate-300">{competition.participants} registered</p>
          </div>
          <div className="bg-white/5 rounded-lg border border-white/10 p-6">
            <h3 className="text-lg font-bold text-white mb-2">Prizes</h3>
            <p className="text-slate-300">{competition.prizes}</p>
          </div>
        </div>
      </div>
      
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Problems</h2>
          <div className="space-y-4">
            {competition.problems.map((problem, index) => (
              <div key={problem.id} className="bg-white/5 rounded-lg border border-white/10 p-4 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-white">{problem.title}</h3>
                  <p className="text-slate-400 text-sm">{problem.description.substring(0, 100)}...</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    problem.difficulty === 'Easy' ? 'bg-green-500/10 text-green-400' : 
                    problem.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-400' : 
                    'bg-red-500/10 text-red-400'
                  }`}>
                    {problem.difficulty}
                  </span>
                  <span className="material-symbols-outlined text-slate-400 cursor-pointer">play_arrow</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Leaderboard</h2>
          <div className="bg-white/5 rounded-lg border border-white/10 p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-yellow-400 font-bold">1</span>
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMvtZ2P6sODKsVgt4NXE_3T-prgkFAtdV8nbSn7wwEqQa_W94_OnGT5Bn_-4ENqKcE3JiuFK1lKX759Uaam5DFTJwUmSIqrkoF72wIAm18NBHKFV_3u78i82uBzQGnVPhV5iFJUntSFx2zXAHJ-D_XYzAcxV-c9CxPNd8F-CgoZtfk77p_mJYyfw2NSqryj6fxg7SaBmuIiW8L52oXXYSxLSfNi_a9oAj7UG1rUvVK4HW3g9xVVLmg9W807V6LD-l98CxjnOaKnTg")`}}></div>
                  <span className="text-white">User1</span>
                </div>
                <span className="text-green-400">5/5</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-gray-400 font-bold">2</span>
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMvtZ2P6sODKsVgt4NXE_3T-prgkFAtdV8nbSn7wwEqQa_W94_OnGT5Bn_-4ENqKcE3JiuFK1lKX759Uaam5DFTJwUmSIqrkoF72wIAm18NBHKFV_3u78i82uBzQGnVPhV5iFJUntSFx2zXAHJ-D_XYzAcxV-c9CxPNd8F-CgoZtfk77p_mJYyfw2NSqryj6fxg7SaBmuIiW8L52oXXYSxLSfNi_a9oAj7UG1rUvVK4HW3g9xVVLmg9W807V6LD-l98CxjnOaKnTg")`}}></div>
                  <span className="text-white">User2</span>
                </div>
                <span className="text-green-400">4/5</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-orange-400 font-bold">3</span>
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMvtZ2P6sODKsVgt4NXE_3T-prgkFAtdV8nbSn7wwEqQa_W94_OnGT5Bn_-4ENqKcE3JiuFK1lKX759Uaam5DFTJwUmSIqrkoF72wIAm18NBHKFV_3u78i82uBzQGnVPhV5iFJUntSFx2zXAHJ-D_XYzAcxV-c9CxPNd8F-CgoZtfk77p_mJYyfw2NSqryj6fxg7SaBmuIiW8L52oXXYSxLSfNi_a9oAj7UG1rUvVK4HW3g9xVVLmg9W807V6LD-l98CxjnOaKnTg")`}}></div>
                  <span className="text-white">User3</span>
                </div>
                <span className="text-green-400">3/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionPage;