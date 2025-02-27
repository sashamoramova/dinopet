import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/shared/enums/routes';
import Layout from '../Layout/Layout';
import { AuthPage, DinoPage, TaskPage } from '@/pages';
import RouterErrorFallback from './RouterErrorFallback';
import AuthGuard from './AuthGuard';
import PublicGuard from './PublicGuard';
import MainPage from '@/pages/MainPage/MainPage';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      { path: ROUTES.HOME, element: < MainPage/> },
      {
        path: ROUTES.AUTH,
        element: (
          <PublicGuard>
            <AuthPage />
          </PublicGuard>
        ),
      },
      {
        path: ROUTES.DINOS,
        element: (
          <AuthGuard>
            <DinoPage />,
          </AuthGuard>
        ),
        errorElement: <RouterErrorFallback />,
      },
      {
        path: ROUTES.TASKS,
        element: (
          <AuthGuard>
            <TaskPage />,
          </AuthGuard>
        ),
        errorElement: <RouterErrorFallback />,
      },
      {
        path: '*',
        element: <h1>404</h1>,
      },
    ],
  },
]);