import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import Page404 from './pages/Page404';
import ProjectsPage from './pages/ProjectsPage';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="home" />, index: true },
        { path: 'home', element: <Home /> },
        { path: 'projects', element: <ProjectsPage /> },
        { path: 'projects/detail/:projectId', element: <ProjectDetail /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
