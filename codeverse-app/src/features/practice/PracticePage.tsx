import React, { useState } from 'react';
import { mockCompetitions } from '@/services/mockData';
import ProblemCard from './ProblemCard';
import type { Problem } from '@/types/competition';

interface FilterOptions {
  difficulty: string;
  topic: string;
  language: string;
  hideSolved: boolean;
}

const PracticePage: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    difficulty: 'All',
    topic: 'All',
    language: 'All',
    hideSolved: false
  });

  // Flatten all problems from all competitions
  const allProblems: { problem: Problem; competitionId: string }[] = mockCompetitions.flatMap(competition =>
    competition.problems.map(problem => ({ problem, competitionId: competition.id }))
  );

  // Apply filters
  const filteredProblems = allProblems.filter(({ problem }) => {
    // Apply difficulty filter
    if (filters.difficulty !== 'All' && problem.difficulty !== filters.difficulty) {
      return false;
    }

    // Apply topic filter
    if (filters.topic !== 'All' && (problem.tags.includes(filters.topic) || problem.tags.some(tag => tag.toLowerCase().includes(filters.topic.toLowerCase())))) {
      return false;
    }

    // Apply hide solved filter - assuming all problems are unsolved in our mock data
    return true;
  });

  const handleFilterChange = (filterName: keyof FilterOptions, value: string | boolean) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  // Get unique topics for the filter dropdown from tags
  const allTopics = Array.from(new Set(allProblems.flatMap(p => p.problem.tags)));
  const allDifficulties = ['All', 'Easy', 'Medium', 'Hard'];
  const allLanguages = ['All', 'Python', 'JavaScript', 'C++', 'Java'];

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between items-center gap-4 p-4">
        <div className="flex flex-col gap-3">
          <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Practice Arena</h1>
          <p className="text-slate-400 text-base font-normal leading-normal">Hone your skills with our collection of coding problems.</p>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-blue-500 hover:bg-blue-600 text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="material-symbols-outlined">shuffle</span>
          <span className="truncate">Pick a Random Problem</span>
        </button>
      </div>

      <div className="p-4 mt-4">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative min-w-40">
            <select 
              className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg text-slate-300 h-10 px-4 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={filters.difficulty}
              onChange={(e) => handleFilterChange('difficulty', e.target.value)}
            >
              {allDifficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>Difficulty: {difficulty}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
          </div>
          
          <div className="relative min-w-40">
            <select 
              className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg text-slate-300 h-10 px-4 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={filters.topic}
              onChange={(e) => handleFilterChange('topic', e.target.value)}
            >
              <option value="All">Topic: All</option>
              {allTopics.map(topic => (
                <option key={topic} value={topic}>{topic}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
          </div>
          
          <div className="relative min-w-40">
            <select 
              className="w-full appearance-none bg-white/5 border border-white/10 rounded-lg text-slate-300 h-10 px-4 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              value={filters.language}
              onChange={(e) => handleFilterChange('language', e.target.value)}
            >
              {allLanguages.map(lang => (
                <option key={lang} value={lang}>Language: {lang}</option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
          </div>
          
          <div className="flex items-center gap-2 text-slate-300">
            <input 
              className="h-4 w-4 rounded bg-white/10 border-white/20 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900" 
              id="solved-checkbox" 
              type="checkbox"
              checked={filters.hideSolved}
              onChange={(e) => handleFilterChange('hideSolved', e.target.checked)}
            />
            <label className="text-sm" htmlFor="solved-checkbox">Hide Solved</label>
          </div>
        </div>
      </div>

      <div className="p-4 mt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="border-b border-white/10">
              <tr>
                <th className="px-6 py-4 font-semibold text-white" scope="col">Title</th>
                <th className="px-6 py-4 font-semibold text-white" scope="col">Difficulty</th>
                <th className="px-6 py-4 font-semibold text-white" scope="col">Topic</th>
                <th className="px-6 py-4 font-semibold text-white hidden md:table-cell" scope="col">Success Rate</th>
                <th className="px-6 py-4 font-semibold text-white" scope="col">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredProblems.map(({ problem }, index) => (
                <tr key={problem.id} className="hover:bg-white/5">
                  <td className="px-6 py-4 font-medium text-white hover:text-blue-500 cursor-pointer">{problem.title}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                      problem.difficulty === 'Easy' ? 'bg-green-500/10 text-green-400' : 
                      problem.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-400' : 
                      'bg-red-500/10 text-red-400'
                    }`}>
                      {problem.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4">{problem.tags.join(', ') || 'N/A'}</td>
                  <td className="px-6 py-4 hidden md:table-cell">{problem.testCases.length} tests</td>
                  <td className="px-6 py-4">
                    <span className="material-symbols-outlined text-slate-500">radio_button_unchecked</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="flex justify-between items-center mt-6 px-2">
          <p className="text-sm text-slate-400">Showing 1 to {filteredProblems.length} of {allProblems.length} problems</p>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed text-slate-300">
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button className="flex items-center justify-center h-8 w-8 rounded-lg bg-blue-500 text-white text-sm">1</button>
            <button className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-sm">2</button>
            <button className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-sm">3</button>
            <button className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/5 hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed text-slate-300">
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticePage;