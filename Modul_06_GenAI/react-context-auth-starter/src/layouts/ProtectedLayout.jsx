import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // Wenn kein user im Context ist, leiten wir den Benutzer zu /login weiter.
  useEffect(() => {
    // const token = localStorage.getItem('token');
    // if (!token) navigate('/login');
    if (!user) navigate('/login');
  }, [navigate, user]);

  // Verhindert kurzes Aufflackern des geschützten Inhalts
  if (!user) return null;
  // Wenn ein user im Context ist, ist er eingeloggt. Das Outlet wird angezeigt.
  return <Outlet />;
};

export default ProtectedLayout;
