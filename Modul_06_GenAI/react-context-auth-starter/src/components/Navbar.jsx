import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          {user ? (
            <li>
              <NavLink to={'user/post-stuff'}>Post Stuff</NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to={'login'}>Login</NavLink>
              </li>
              <li>
                <NavLink to={'signup'}>Sign Up</NavLink>
              </li>
            </>
          )}
        </ul>
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
};

export default Navbar;
