import { useAppDispatch } from '@/shared/hooks/reduxHooks';
import styles from './Layout.module.css';
import { Footer } from '@/widgets/Footer';
import Navbar from '@/widgets/Navbar/ui/Navbar';
import { Sidebar } from '@/widgets/SideBar';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { refreshTokensThunk } from '@/entities/user';

export default function Layout(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshTokensThunk());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <main className={styles.root}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}