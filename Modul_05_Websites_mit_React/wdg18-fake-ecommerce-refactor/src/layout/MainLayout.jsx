import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

const MainLayout = () => {
  const [cart, setCart] = useState([]);
  console.log(cart);

  return (
    <>
      <Navbar cart={cart} />
      <Outlet context={{ cart, setCart }} />
    </>
  );
};

export default MainLayout;
