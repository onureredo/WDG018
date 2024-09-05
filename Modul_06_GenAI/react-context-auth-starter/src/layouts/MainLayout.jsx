import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AuthContextProvider from '../contexts/AuthContext';

const MainLayout = () => {
  return (
    <>
      {/* Alle Komponenten, die zugang zum Context brauchen, werden in ihn hineingepackt */}
      <AuthContextProvider>
        <Navbar />
        <Outlet />
        <footer>I&apos;m the footer</footer>
      </AuthContextProvider>
    </>
  );
};

export default MainLayout;
