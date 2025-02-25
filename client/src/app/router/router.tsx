import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '@/shared/enums/routes';
import Layout from '../Layout/Layout';
import { AuthPage, TaskPage } from '@/pages';
import RouterErrorFallback from './RouterErrorFallback';
import AuthGuard from './AuthGuard';
import PublicGuard from './PublicGuard';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Layout />,
    children: [
      {
        path: ROUTES.AUTH,
        element: (
          <PublicGuard>
            <AuthPage />
          </PublicGuard>
        ),
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