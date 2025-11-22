import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfilePage from '@/features/profile/ProfilePage';
import Layout from '@/components/common/Layout';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/profile" element={<Layout><ProfilePage /></Layout>} />
        <Route path="/" element={<Layout><div>Home</div></Layout>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
