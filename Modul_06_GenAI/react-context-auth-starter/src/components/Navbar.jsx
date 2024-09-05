import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
  // Hole user und logout-Funktion aus dem Context
  const { user, logout } = useContext(AuthContext);
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Home</NavLink>
          </li>
          {/* Wenn der user eingeloggt ist, zeige die geschützten Seiten an */}
          {user ? (
            <li>
              <NavLink to={'user/post-stuff'}>Post Stuff</NavLink>
            </li>
          ) : (
            // Wenn kein User eingeloggt ist, zeige login und signup Seiten an
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
        {/* Wenn ein user eingeloggt ist, zeige den Logout-Button an */}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
};

export default Navbar;
