import React from 'react';
import { Link } from 'react-router-dom';
import type { Competition } from '@/types/competition';

interface CompetitionCardProps {
  competition: Competition;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({ competition }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 hover:bg-gray-700 transition duration-200">
      <h2 className="text-xl font-bold mb-2">{competition.title}</h2>
      <p className="text-gray-400 mb-4">{competition.description}</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-400">
            <strong>Starts:</strong> {new Date(competition.startTime).toLocaleString()}
          </p>
          <p className="text-sm text-gray-400">
            <strong>Ends:</strong> {new Date(competition.endTime).toLocaleString()}
          </p>
        </div>
        <Link
          to={`/competitions/${competition.id}`}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CompetitionCard;
