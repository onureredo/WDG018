import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // const token = localStorage.getItem('token');
    // if (!token) navigate('/login');
    if (!user) navigate('/login');
  }, [navigate, user]);

  return <Outlet />;
};

export default ProtectedLayout;
