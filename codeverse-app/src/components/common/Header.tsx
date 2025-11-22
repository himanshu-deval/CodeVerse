import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, logout } from '@/features/auth/authSlice';

const Header: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
          {isAuthenticated ? (
            <>
              <Link to="/profile">Profile</Link>
              <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
