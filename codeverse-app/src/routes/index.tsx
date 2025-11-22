import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Competitions from '../pages/Competitions';
import Practice from '../pages/Practice';
import Leaderboard from '../pages/Leaderboard';
import Profile from '../pages/Profile';
import TeamBattle from '../pages/TeamBattle';
import Problem from '../pages/Problem';
import Layout from '../components/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout><Dashboard /></Layout>,
  },
  {
    path: '/dashboard',
    element: <Layout><Dashboard /></Layout>,
  },
  {
    path: '/competitions',
    element: <Layout><Competitions /></Layout>,
  },
  {
    path: '/practice',
    element: <Layout><Practice /></Layout>,
  },
  {
    path: '/leaderboard',
    element: <Layout><Leaderboard /></Layout>,
  },
  {
    path: '/profile',
    element: <Layout><Profile /></Layout>,
  },
  {
    path: '/team-battle',
    element: <Layout><TeamBattle /></Layout>,
  },
  {
    path: '/problem/:id',
    element: <Layout><Problem /></Layout>,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
