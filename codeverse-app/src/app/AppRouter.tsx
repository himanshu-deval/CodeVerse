import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfilePage from '@/features/profile/ProfilePage';
import Layout from '@/components/common/Layout';
import DashboardPage from '@/features/dashboard/DashboardPage';
import CompetitionsPage from '@/features/competitions/CompetitionsPage';
import CompetitionPage from '@/features/competitions/CompetitionPage';
import ProblemPage from '@/features/problems/ProblemPage';
import PracticePage from '@/features/practice/PracticePage';
import LeaderboardPage from '@/features/leaderboard/LeaderboardPage';
import LoginPage from '@/features/login/LoginPage';
import RegistrationPage from '@/features/register/RegistrationPage';
import FindBattlePage from '@/features/competitions/FindBattlePage';
import NotFoundPage from '@/features/not-found/NotFoundPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/home" element={<Navigate to="/dashboard" />} />
        <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
        <Route path="/dashboard" element={<Layout><DashboardPage /></Layout>} />
        <Route path="/competitions" element={<Layout><CompetitionsPage /></Layout>} />
        <Route path="/competitions/:competitionId/problems/:problemId" element={<Layout><ProblemPage /></Layout>} />
        <Route path="/competitions/:competitionId" element={<Layout><CompetitionPage /></Layout>} />
        <Route path="/find-battle" element={<Layout><FindBattlePage /></Layout>} />
        <Route path="/practice" element={<Layout><PracticePage /></Layout>} />
        <Route path="/leaderboard" element={<Layout><LeaderboardPage /></Layout>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
