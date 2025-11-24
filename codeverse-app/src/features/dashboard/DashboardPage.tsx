import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/features/auth/authSlice';
import { mockDashboardData } from '@/services/mockDashboardData';

const DashboardPage: React.FC = () => {
  const user = useSelector(selectUser);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-between items-center gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-white text-4xl font-black leading-tight tracking-[-0.033em]">Dashboard</p>
          <p className="text-slate-400 text-base font-normal leading-normal">Welcome back, {user ? user.name : 'Guest'}! Ready to code?</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        {/* Upcoming Competitions */}
        <div className="bg-white/5 rounded-lg shadow-lg p-6 border border-white/10">
          <h2 className="text-2xl font-bold mb-4 text-white">Upcoming Competitions</h2>
          {mockDashboardData.upcomingCompetitions.length > 0 ? (
            <div className="space-y-4">
              {mockDashboardData.upcomingCompetitions.map((competition) => (
                <div key={competition.id} className="bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition duration-200">
                  <h3 className="text-xl font-semibold text-white">{competition.title}</h3>
                  <p className="text-slate-400">{competition.date}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-400">No upcoming competitions.</p>
          )}
        </div>

        {/* Recent Activity */}
        <div className="bg-white/5 rounded-lg shadow-lg p-6 border border-white/10">
          <h2 className="text-2xl font-bold mb-4 text-white">Recent Activity</h2>
          {mockDashboardData.recentActivity.length > 0 ? (
            <div className="space-y-4">
              {mockDashboardData.recentActivity.map((activity) => (
                <div key={activity.id} className="bg-gray-800 p-4 rounded-md hover:bg-gray-700 transition duration-200">
                  <h3 className="text-xl font-semibold text-white">
                    {activity.type === 'submission'
                      ? `Submission: ${activity.problem}`
                      : `Competition: ${activity.title}`}
                  </h3>
                  <p className="text-slate-400">
                    {activity.status && `Status: ${activity.status} - `}
                    {activity.date}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-400">No recent activity.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;