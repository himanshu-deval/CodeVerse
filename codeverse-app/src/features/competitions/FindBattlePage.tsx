import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface MatchFoundUser {
  name: string;
  rank: string;
  wins: number;
  losses: number;
  avatar: string;
}

const FindBattlePage: React.FC = () => {
  const [difficulty, setDifficulty] = useState<string>('Medium');
  const [language, setLanguage] = useState<string>('javascript');
  const [stake, setStake] = useState<number>(100);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(5);
  
  const navigate = useNavigate();
  
  const [isMatchFound, setIsMatchFound] = useState<boolean>(false);
  
  // Mock match found data
  const currentUser: MatchFoundUser = {
    name: 'alex_dev',
    rank: 'Diamond II',
    wins: 128,
    losses: 42,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7v9etNO86KTgHERpH8jxpds8saMYoq4GZi4DF_HISH8t_bLYTODzm0J4kjJMvEz1Q1aHnPXxNIp2GLez3DgUU2cD7cS7kzdyVxYCy1N64TtQNqGDon4LkjluMe_6iOe0Fykz38wd1qT7WZbbJ56Qws6fuKvcF9-BtqnyfPom2-4MugnRpwVOLK08W-6CLyzivFb3Q2MkuK8linpHKHjBIo7eHQvAqm6-X6flOo7iPTNCYRxUj9H8Yp08mh8YZcZAAvSD4fSmoG8'
  };
  
  const opponentUser: MatchFoundUser = {
    name: 'cipher_code',
    rank: 'Diamond III',
    wins: 99,
    losses: 31,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9BViTP4HQ8ZE0ffkrLF2CA6Fqf_RXvVFNFoXyhyu9x-BxzclMoA6nRlYDI-MMQtRMe7WwGDTsThQYng0C_TD-NCdjgDvaRagd3GiM3w95HtX3D-MoRADUJa43jjDZaBh1AUzAmUwzYORX7DYM__Eeut8dGcgDJGI-xbQ4otUg6cFFTdyZM5Kffn4J96gr22D2dTNhUGiYuUuLc9K2mwFHr94VeLf07TGK-JyGJWB4yh5J6CNdSfhwPV_r6Z9ZWNE6J65wHV5C-yc'
  };
  
  const handleFindMatch = () => {
    setIsSearching(true);
    
    // Simulate matching process
    setTimeout(() => {
      setIsSearching(false);
      setIsMatchFound(true);
    }, 5000);
  };
  
  const handleCancelSearch = () => {
    setIsSearching(false);
  };
  
  // Countdown timer when match is found
  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isMatchFound && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (isMatchFound && countdown === 0) {
      // Navigate to the first problem in the competition when countdown reaches 0
      navigate('/competitions/1/problems/1');
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isMatchFound, countdown, navigate]);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between gap-3 p-4 text-center">
        <div className="flex w-full flex-col gap-3">
          <p className="text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">Find a Battle</p>
          <p className="text-slate-400 text-base font-normal leading-normal">Set your preferences and find a worthy opponent.</p>
        </div>
      </div>
      
      {/* Preference Selection Card */}
      <div className="flex flex-col border border-white/10 bg-white/5 rounded-xl shadow-2xl shadow-black/20 mt-8">
        {/* SectionHeader */}
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-6 pb-3 pt-5 border-b border-white/10">Set Your Battle Preferences</h2>
        <div className="p-6 space-y-8">
          {/* Difficulty */}
          <div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Difficulty</h2>
            <div className="flex">
              <div className="flex h-12 flex-1 items-center justify-center rounded-lg bg-black/20 p-1 border border-white/10">
                {['Easy', 'Medium', 'Hard'].map((diff) => (
                  <label 
                    key={diff}
                    className={`flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 text-slate-400 ${
                      difficulty === diff 
                        ? 'bg-blue-500 text-white' 
                        : 'has-[:checked]:bg-blue-500 has-[:checked]:text-white text-slate-400 hover:text-white'
                    } text-sm font-medium leading-normal transition-colors`}
                  >
                    <span className="truncate">{diff}</span>
                    <input 
                      type="radio" 
                      name="difficulty-selector" 
                      value={diff}
                      checked={difficulty === diff}
                      onChange={() => setDifficulty(diff)}
                      className="invisible w-0" 
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
          
          {/* Language Selector */}
          <div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Language</h2>
            <div className="relative">
              <select 
                className="w-full appearance-none h-12 px-4 rounded-lg bg-black/20 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="java">Java</option>
                <option value="csharp">C#</option>
                <option value="go">Go</option>
              </select>
              <span className="material-symbols-outlined pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">expand_more</span>
            </div>
          </div>
          
          {/* Coin Stake */}
          <div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-3">Coin Stake</h2>
            <div className="relative flex items-center">
              <button 
                className="absolute left-0 flex items-center justify-center size-12 text-slate-400 hover:text-white transition-colors"
                onClick={() => setStake(Math.max(0, stake - 10))}
              >
                <span className="material-symbols-outlined">remove</span>
              </button>
              <input 
                type="number" 
                value={stake}
                onChange={(e) => setStake(Number(e.target.value))}
                className="w-full h-12 px-12 text-center font-bold text-lg rounded-lg bg-black/20 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
              <button 
                className="absolute right-0 flex items-center justify-center size-12 text-slate-400 hover:text-white transition-colors"
                onClick={() => setStake(stake + 10)}
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="px-6 pb-6 pt-2">
          <button 
            className="flex w-full min-w-[84px] max-w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-4 bg-blue-500 hover:bg-blue-600 text-white text-lg font-bold leading-normal tracking-[0.015em] transition-colors"
            onClick={handleFindMatch}
          >
            <span className="truncate">Find Match</span>
          </button>
        </div>
      </div>
      
      {/* Searching UI */}
      {isSearching && (
        <div className="flex flex-col items-center justify-center text-center mt-8 py-10">
          <div className="relative flex items-center justify-center size-24">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
            <div className="absolute inset-2 rounded-full bg-blue-500/30 animate-ping delay-200"></div>
            <span className="material-symbols-outlined text-4xl text-blue-500 relative">search</span>
          </div>
          <p className="text-white text-2xl font-bold mt-8">Searching for a worthy opponent...</p>
          <p className="text-slate-400 mt-2">Estimated wait time: 35 seconds</p>
          <button 
            className="mt-8 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white/10 hover:bg-white/20 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors"
            onClick={handleCancelSearch}
          >
            <span className="truncate">Cancel Search</span>
          </button>
        </div>
      )}
      
      {/* Match Found Modal */}
      {isMatchFound && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="flex flex-col w-full max-w-4xl bg-gray-900 border border-white/10 rounded-xl shadow-2xl shadow-blue-500/20 p-8 text-center text-white">
            <h2 className="text-4xl font-black text-blue-500 tracking-tighter">Opponent Found!</h2>
            <p className="text-5xl sm:text-7xl font-bold mt-6">Battle starts in <span className="text-white">{countdown}</span></p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {/* Your Profile */}
              <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg border border-blue-500/50">
                <p className="text-lg font-bold text-blue-500">You</p>
                <img 
                  className="size-24 rounded-full mt-4 border-2 border-blue-500" 
                  src={currentUser.avatar} 
                  alt="Your avatar" 
                />
                <p className="text-2xl font-bold mt-4">{currentUser.name}</p>
                <p className="text-slate-400">Rank: {currentUser.rank}</p>
                <p className="text-slate-400">W/L: {currentUser.wins} / {currentUser.losses}</p>
              </div>
              
              {/* Opponent Profile */}
              <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg border border-white/20">
                <p className="text-lg font-bold">Opponent</p>
                <img 
                  className="size-24 rounded-full mt-4 border-2 border-white/30" 
                  src={opponentUser.avatar} 
                  alt="Opponent's avatar" 
                />
                <p className="text-2xl font-bold mt-4">{opponentUser.name}</p>
                <p className="text-slate-400">Rank: {opponentUser.rank}</p>
                <p className="text-slate-400">W/L: {opponentUser.wins} / {opponentUser.losses}</p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-500">bar_chart</span>
                <span>Difficulty: {difficulty}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-500">code</span>
                <span>Language: {language.charAt(0).toUpperCase() + language.slice(1)}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-blue-500">toll</span>
                <span>Stake: {stake} Coins</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FindBattlePage;