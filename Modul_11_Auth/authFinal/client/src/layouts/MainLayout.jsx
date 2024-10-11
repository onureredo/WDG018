import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MainLayout() {
  return (
    <>
      <Toaster />
      <Navbar />
      <Outlet />
    </>
  );
}

export default MainLayout;
