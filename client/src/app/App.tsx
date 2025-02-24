import { useEffect, useState } from 'react';
import './App.css';
import { UserType, UserWithTokenType } from '../entities/user/model';
import UserApi from '../entities/user/api/UserApi';
import { IApiResponseSuccess } from '../shared/types';
import { setAccessToken } from '../shared/lib/axiosInstance';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import SignInPage from '../pages/SignInPage/SignInPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

function App() {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    UserApi.refreshTokens()
      .then((response) => {
        const { data, error, statusCode } =
          response as IApiResponseSuccess<UserWithTokenType>;
        if (error) {
          setUser(null);
        }
        if (statusCode < 400) {
          setAccessToken(data.accessToken);
          setUser(data.user);
        }
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          {user ? `Привет, ${user.username}!` : 'Собаня'} <Outlet />
        </>
      ),
      children: [
        {
          path: '/signin',
          element: <SignInPage setUser={setUser} />,
        },
        {
          path: '/signup',
          element: <SignUpPage setUser={setUser} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;