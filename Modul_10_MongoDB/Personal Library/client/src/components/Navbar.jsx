import { Link } from 'react-router-dom';
import { user } from '../services/apiService';

function Navbar() {
  return (
    <nav className='bg-orange-600 p-4 shadow-md'>
      <div className='container mx-auto flex justify-between items-center text-lg font-bold'>
        <div className='flex space-x-6'>
          <Link
            to='/'
            className='text-white hover:text-gray-200 transition-colors'
          >
            WDG 18 Personal Library
          </Link>
        </div>

        <div className='flex items-center space-x-4'>
          <span className='text-white text-md'>
            Welcome back, {user.firstName}
          </span>
          <Link
            to='/profile'
            className='bg-white text-orange-600 px-3 rounded hover:opacity-70 transition-colors'
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
