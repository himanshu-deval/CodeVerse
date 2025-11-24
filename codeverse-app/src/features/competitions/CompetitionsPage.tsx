import React, { useState } from 'react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  status: 'online' | 'offline';
}

interface Competition {
  id: string;
  title: string;
  format: string;
  entry: number;
  prizePool: number;
}

const CompetitionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock team data
  const teamMembers: TeamMember[] = [
    { id: '1', name: 'CodeWizard', role: 'Captain', status: 'online' },
    { id: '2', name: 'PixelPioneer', role: 'Member', status: 'online' },
    { id: '3', name: 'LogicLass', role: 'Member', status: 'offline' }
  ];
  
  // Mock competitions data
  const competitions: Competition[] = [
    { id: '1', title: 'Algorithm Arena 3v3', format: '3v3', entry: 500, prizePool: 10000 },
    { id: '2', title: 'Data Dash 5v5', format: '5v5', entry: 1000, prizePool: 25000 }
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between items-center gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Team Battle</p>
          <p className="text-slate-400 text-base font-normal leading-normal">Form teams, join competitions, and climb the leaderboards.</p>
        </div>
      </div>
      
      <div className="flex p-4">
        <div className="flex w-full flex-col gap-4 flex-row justify-between items-center bg-white/5 p-6 rounded-xl border border-white/10">
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg min-h-32 w-32" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCuXTM0JxK1e3Mxl0Vd6QBNK_8zcz505-j0q2lNeG_-HBbRRQz9yfa4-1YjAg0IUgRvHHKJP8WkjrL_iesSkc7QNjlgUA0NWnsFlBGQ9mPWiQbDv-fg7LDZLMQUAKDaNbCUYGxW38huDSSoX3UDV0zitY0PPQb-8TejGLyZ3CMHutbUnbVvUGiyLjt1y2wngg45xzxn8lCqno1f9JpXYc6nCC0SUBe7iE-20xJLdAULUouPYs4UVGQGKOKJ8SAua2sh9ux50u10fZg")'}}></div>
            <div className="flex flex-col text-center sm:text-left">
              <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">The Syntax Sorcerers</p>
              <p className="text-slate-400 text-base font-normal leading-normal">Win/Loss: 24/7 | Team Rank: #12 | Total Coins: 15,300</p>
              <p className="text-slate-400 text-base font-normal leading-normal mt-1">We turn caffeine into code.</p>
            </div>
          </div>
          <div className="flex w-full max-w-[480px] gap-3 flex-wrap mt-4 sm:mt-0">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white/10 hover:bg-white/20 text-white text-sm font-bold leading-normal tracking-[0.015em] flex-1">
              <span className="truncate">Invite Members</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em] flex-1">
              <span className="truncate">Edit Profile</span>
            </button>
          </div>
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
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 border-b-[3px] ${activeTab === 'competitions' ? 'border-b-blue-500 text-white' : 'border-b-transparent text-slate-400 hover:text-white'}`}
            onClick={() => setActiveTab('competitions')}
          >
            <p className="text-slate-400 hover:text-white text-sm font-bold leading-normal tracking-[0.015em]">Competitions</p>
          </button>
          <button 
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 border-b-[3px] ${activeTab === 'history' ? 'border-b-blue-500 text-white' : 'border-b-transparent text-slate-400 hover:text-white'}`}
            onClick={() => setActiveTab('history')}
          >
            <p className="text-slate-400 hover:text-white text-sm font-bold leading-normal tracking-[0.015em]">Match History</p>
          </button>
          <button 
            className={`flex flex-col items-center justify-center pb-[13px] pt-4 border-b-[3px] ${activeTab === 'leaderboard' ? 'border-b-blue-500 text-white' : 'border-b-transparent text-slate-400 hover:text-white'}`}
            onClick={() => setActiveTab('leaderboard')}
          >
            <p className="text-slate-400 hover:text-white text-sm font-bold leading-normal tracking-[0.015em]">Leaderboard</p>
          </button>
        </div>
      </div>
      
      <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Team Roster</h2>
          <div className="flex flex-col gap-4">
            {teamMembers.map((member) => (
              <div key={member.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" style={{backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAMvtZ2P6sODKsVgt4NXE_3T-prgkFAtdV8nbSn7wwEqQa_W94_OnGT5Bn_-4ENqKcE3JiuFK1lKX759Uaam5DFTJwUmSIqrkoF72wIAm18NBHKFV_3u78i82uBzQGnVPhV5iFJUntSFx2zXAHJ-D_XYzAcxV-c9CxPNd8F-CgoZtfk77p_mJYyfw2NSqryj6fxg7SaBmuIiW8L52oXXYSxLSfNi_a9oAj7UG1rUvVK4HW3g9xVVLmg9W807V6LD-l98CxjnOaKnTg")`}}></div>
                    <span className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full border-2 border-gray-900 ${
                      member.status === 'online' ? 'bg-green-500' : 'bg-slate-500'
                    }`}></span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{member.name}</p>
                    <p className="text-slate-400 text-sm">{member.role}</p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-slate-400 cursor-pointer">more_vert</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">Active Competitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {competitions.map((comp) => (
              <div key={comp.id} className="bg-white/5 rounded-lg border border-white/10 p-6 flex flex-col gap-4">
                <h3 className="text-lg font-bold text-white">{comp.title}</h3>
                <div className="flex flex-col gap-2 text-sm text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-slate-400">group</span>
                    <span>Team Format: {comp.format}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-slate-400">monetization_on</span>
                    <span>Entry: {comp.entry} Coins</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-base text-slate-400">emoji_events</span>
                    <span>Prize Pool: {comp.prizePool} Coins</span>
                  </div>
                </div>
                <button className="w-full mt-2 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em]">
                  <span className="truncate">Register Team</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionsPage;