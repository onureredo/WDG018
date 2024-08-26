import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className='flex gap-3'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
