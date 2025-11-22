import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          CodeVerse
        </Link>
        <div className="flex gap-4">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/competitions">Competitions</Link>
          <Link to="/practice">Practice</Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-700 text-white rounded-md px-2 py-1"
          />
          <Link to="/profile">Profile</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
