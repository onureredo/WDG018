import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AuthContextProvider from '../contexts/AuthContext';

const MainLayout = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
        <footer>I&apos;m the footer</footer>
      </AuthContextProvider>
    </>
  );
};

export default MainLayout;
