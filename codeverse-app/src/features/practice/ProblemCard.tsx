import React from 'react';
import { Link } from 'react-router-dom';
import type { Problem } from '@/types/competition';

interface ProblemCardProps {
  problem: Problem;
  competitionId: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem, competitionId }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-200 flex justify-between items-center">
      <div>
        <h3 className="text-xl font-bold">{problem.title}</h3>
        <p className="text-gray-400">Difficulty: {problem.difficulty}</p>
      </div>
      <Link to={`/competitions/${competitionId}/problems/${problem.id}`} className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200">
        Solve Problem
      </Link>
    </div>
  );
};

export default ProblemCard;
