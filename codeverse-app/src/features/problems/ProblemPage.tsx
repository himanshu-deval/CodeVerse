import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockCompetitions } from '@/services/mockData';

interface Testcase {
  id: number;
  input: string;
  output: string;
}

const ProblemPage: React.FC = () => {
  const { competitionId, problemId } = useParams<{ competitionId: string; problemId: string }>();
  
  // Find the competition and problem based on IDs
  const competition = mockCompetitions.find(comp => comp.id === competitionId);
  const problem = competition?.problems.find(p => p.id === problemId);
  
  if (!problem) {
    return <div className="text-white p-4">Problem not found</div>;
  }
  
  const [code, setCode] = useState<string>(`def solve():
    # Your code here
    pass`);
  const [language, setLanguage] = useState<string>('Python');
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  
  // Sample test cases for the problem
  const testcases: Testcase[] = [
    { id: 1, input: "[1, 2, 3]", output: "[2, 4, 6]" },
    { id: 2, input: "[2, 4, 6]", output: "[4, 8, 12]" },
  ];

  const handleRunCode = () => {
    setIsRunning(true);
    // In a real implementation, this would send the code to a backend for execution
    setTimeout(() => {
      setOutput("Sample output would appear here");
      setIsRunning(false);
    }, 1000);
  };

  const handleSubmit = () => {
    setIsRunning(true);
    // In a real implementation, this would submit the solution for evaluation
    setTimeout(() => {
      setOutput("Solution submitted successfully!");
      setIsRunning(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full">
      <div className="flex-1">
        <div className="flex flex-wrap justify-between items-center gap-3 p-4">
          <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">{problem.title}</p>
          <div className="flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20">
            <span className="material-symbols-outlined text-base">psychology</span>
            <span>Practice Mode</span>
          </div>
        </div>

        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <select 
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-white/10 bg-white/5 focus:border-white/10 h-14 bg-[image:--select-button-svg] placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>Python</option>
              <option>JavaScript</option>
              <option>C++</option>
            </select>
          </label>
        </div>

        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <textarea 
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-white/10 bg-white/5 focus:border-white/10 min-h-36 placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal font-mono" 
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck="false"
            />
          </label>
        </div>

        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Input</h3>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <textarea 
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-white/10 bg-white/5 focus:border-white/10 min-h-36 placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal font-mono" 
              placeholder="Enter input here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </label>
        </div>

        <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Output</h3>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <textarea 
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-white/10 bg-white/5 focus:border-white/10 min-h-36 placeholder:text-slate-400 p-[15px] text-base font-normal leading-normal font-mono" 
              value={output}
              readOnly
            />
          </label>
        </div>

        <div className="flex justify-between items-center">
          <div className="px-4 py-3 flex items-center gap-2 text-yellow-400">
            <span className="material-symbols-outlined text-xl">toll</span>
            <span className="text-sm font-medium">Win: +50 / Complete: +10</span>
          </div>
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-end">
            <button 
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white/10 hover:bg-white/20 text-white text-sm font-bold leading-normal tracking-[0.015em]"
              onClick={handleRunCode}
              disabled={isRunning}
            >
              <span className="truncate">Run Code</span>
            </button>
            <button 
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold leading-normal tracking-[0.015em]"
              onClick={handleSubmit}
              disabled={isRunning}
            >
              <span className="truncate">Submit</span>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[360px] flex-col divide-y divide-white/10 rounded-lg border border-white/10 bg-white/5">
        <div className="p-4">
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2">Head-to-Head Status</h3>
          <div className="flex flex-col gap-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCdAvp0p5MTATD5U_AkhwyB7fowttZ4zZnsWtmOx8ncqRNOvNaf0bY0Cey3fwF_146lQg3BV6schHoT4Ow4JmkJPD3grapKboZDckG-Zj9sFNMwglhHHzD3RPE1YhBfAyr42T0TdIwjy_3SGXwKGf0sf7h3TdxLu06LeKfA2OhUpVK8lt_0EPtZ1xgLHoo8p_9oRZZ7NgWnWpoSFKqLZddIzMbwWd450cQM6aqZIjuMKUqqE-5utNj2lDIfAplGi83v8Uvvo74CE4E")'}}>
                <div className="absolute -bottom-0.5 -right-0.5 rounded-full bg-green-500 size-3 ring-2 ring-gray-900"></div>
              </div>
              <div className="flex-1">
                <p className="text-white text-base font-medium leading-normal">You</p>
                <p className="text-green-400 text-sm font-normal leading-normal">1/3 Solved (02:15)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCIBuuK30XS6opjK9-ss6J9RLbkbJ6bBrtdlmEZ2XCZ1g3LxRs4G4LgNXhLHn6aDPcmHHtD1NhYpt3nM1dlkeyqH8-1VAjNRoDfu1HhhFp-BTeIA2uHxZvqU04kdBL7qlZDI_QVXMSG8GsX0E2OTK1ErjOU2NFCARJZHjH1RBZ-xXWxeuYnqLj65u0XCWg9n8Xn9hNrdKw6mX2iNv75dASrQ7_wYsbTaPYs5DmofG5a8rEsIcXSMSTUXvrQhPEb9ZLvcXunDDGC08s")'}}>
                <div className="absolute -bottom-0.5 -right-0.5 rounded-full bg-yellow-500 size-3 ring-2 ring-gray-900"></div>
              </div>
              <div className="flex-1">
                <p className="text-white text-base font-medium leading-normal">RivalCoder99</p>
                <p className="text-yellow-400 text-sm font-normal leading-normal">1/3 Solved (03:40)</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Problem Description</h3>
          <p className="text-slate-400 text-base font-normal leading-normal pt-2">{problem.description}</p>
        </div>
        
        <div className="p-4">
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Test Cases</h3>
          <div className="flex flex-col gap-3 pt-2">
            {testcases.map((tc) => (
              <div key={tc.id} className="rounded-md bg-gray-900 p-3">
                <p className="text-white text-sm font-medium leading-normal font-mono">Input: {tc.input}</p>
                <p className="text-slate-400 text-sm font-normal leading-normal font-mono pt-1">Output: {tc.output}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;