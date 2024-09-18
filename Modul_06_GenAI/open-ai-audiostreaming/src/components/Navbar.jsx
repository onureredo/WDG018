import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='container mx-auto navbar justify-end'>
      <div>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>
              Home
              <span role='img' aria-label='chat'>
                💬
              </span>
            </Link>
          </li>
          <li>
            <Link to='/settings'>
              Settings
              <span role='img' aria-label='settings'>
                ⚙️
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
