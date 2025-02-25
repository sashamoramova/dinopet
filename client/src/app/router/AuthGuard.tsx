import { ROUTES } from '@/shared/enums/routes';
import { useAppSelector } from '@/shared/hooks/reduxHooks';
import { Loader } from '@/shared/ui/Loader';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function AuthGuard({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const user = useAppSelector((state) => state.user.user);
  const isInitialized = useAppSelector((state) => state.user.isInitialized);
  const location = useLocation();

  if (!isInitialized) {
    return <Loader loading={true} />;
  }

  if (!user) {
    return (
      <Navigate
        to={`${ROUTES.AUTH_ROOT}/signin`}
        state={{ from: location }}
        replace
      />
    );
  }
  return <>{children}</>;
}