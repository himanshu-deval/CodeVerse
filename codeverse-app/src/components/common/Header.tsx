import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsAuthenticated, logout } from '@/features/auth/authSlice';

const Header: React.FC = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const dispatch = useDispatch();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleLogout = () => {
    dispatch(logout());
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/10 px-4 sm:px-10 py-3 bg-gray-900">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-4 text-white">
          <div className="size-6 text-blue-500">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" fill="currentColor"></path>
              <path clipRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">CodeVerse</h2>
        </Link>
        <div className="hidden lg:flex items-center gap-9">
          <Link to="/competitions" className={`${isActive('/competitions') ? 'text-white' : 'text-slate-300 hover:text-white'} text-sm font-medium leading-normal`}>Compete</Link>
          <Link to="/find-battle" className={`${isActive('/find-battle') ? 'text-white' : 'text-slate-300 hover:text-white'} text-sm font-medium leading-normal`}>Find Battle</Link>
          <Link to="/practice" className={`${isActive('/practice') ? 'text-white' : 'text-slate-300 hover:text-white'} text-sm font-medium leading-normal`}>Practice</Link>
          <Link to="/leaderboard" className={`${isActive('/leaderboard') ? 'text-white' : 'text-slate-300 hover:text-white'} text-sm font-medium leading-normal`}>Leaderboard</Link>
        </div>
      </div>
      <div className="flex flex-1 justify-end items-center gap-4">
        <label className="hidden lg:flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-slate-400 flex border-none bg-white/5 items-center justify-center pl-4 rounded-l-lg border-r-0">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-200 focus:outline-0 focus:ring-0 border-none bg-white/5 focus:border-none h-full placeholder:text-slate-400 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              placeholder="Search problems..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </label>
        {isAuthenticated ? (
          <div className="relative">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y")' }}></button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1">
                <Link to="/profile" className="block px-4 py-2 text-sm text-slate-300 hover:bg-gray-700 hover:text-white">Profile</Link>
                <button onClick={handleLogout} className="w-full text-left block px-4 py-2 text-sm text-slate-300 hover:bg-gray-700 hover:text-white">Logout</button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">Login</Link>
            <Link to="/register" className="px-4 py-2 text-sm text-white bg-gray-600 rounded-md hover:bg-gray-700">Register</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
