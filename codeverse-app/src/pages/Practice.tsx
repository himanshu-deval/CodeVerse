import React from 'react';

const problems = [
  {
    title: 'Two Sum',
    difficulty: 'Easy',
    topic: 'Arrays',
    successRate: '85%',
    status: true,
  },
  {
    title: 'Reverse Linked List',
    difficulty: 'Easy',
    topic: 'Linked Lists',
    successRate: '78%',
    status: false,
  },
  {
    title: 'Binary Tree Traversal',
    difficulty: 'Medium',
    topic: 'Trees',
    successRate: '65%',
    status: true,
  },
  {
    title: 'Longest Substring Without Repeating Characters',
    difficulty: 'Medium',
    topic: 'Strings',
    successRate: '55%',
    status: false,
  },
  {
    title: 'Median of Two Sorted Arrays',
    difficulty: 'Hard',
    topic: 'Algorithms',
    successRate: '41%',
    status: false,
  },
  {
    title: 'Word Ladder',
    difficulty: 'Hard',
    topic: 'Graphs',
    successRate: '35%',
    status: false,
  },
];

const Practice: React.FC = () => {
  return (
    <div className="p-8 text-white">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">Practice Arena</h1>
          <p className="text-gray-400">Hone your skills with our collection of coding problems.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Pick a Random Problem
        </button>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <select className="bg-gray-800 border border-gray-700 rounded px-3 py-2">
            <option>Difficulty: All</option>
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
          <select className="bg-gray-800 border border-gray-700 rounded px-3 py-2">
            <option>Topic: All</option>
          </select>
          <select className="bg-gray-800 border border-gray-700 rounded px-3 py-2">
            <option>Language: All</option>
          </select>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox h-5 w-5 bg-gray-800 border-gray-700 rounded" />
            <span className="ml-2 text-gray-400">Hide Solved</span>
          </label>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Difficulty</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Topic</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Success Rate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {problems.map((problem, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{problem.title}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    problem.difficulty === 'Easy' ? 'bg-green-900 text-green-300' :
                    problem.difficulty === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                    'bg-red-900 text-red-300'
                  }`}>
                    {problem.difficulty}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{problem.topic}</td>
                <td className="px-6 py-4 whitespace-nowrap">{problem.successRate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {problem.status ? (
                    <span className="text-green-500">✓</span>
                  ) : (
                    <span className="text-gray-500">○</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-400">Showing 1 to 6 of 150 problems</p>
        <div className="flex items-center">
          <button className="px-3 py-1 border border-gray-700 rounded-l-md">&lt;</button>
          <button className="px-3 py-1 border-t border-b border-gray-700 bg-blue-600">1</button>
          <button className="px-3 py-1 border-t border-b border-gray-700">2</button>
          <button className="px-3 py-1 border-t border-b border-gray-700">3</button>
          <button className="px-3 py-1 border border-gray-700 rounded-r-md">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Practice;