import { Outlet } from 'react-router-dom';

const ProtectedLayout = () => {
  // überprüfe, ob token in localStorage
  //
  //  wenn kein token, navigiere zu /sign-in

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
