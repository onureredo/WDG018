import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';
import axios from 'axios';

function Navbar() {
  const { isLoggedIn, setIsLoggedIn, userData, setUserData } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );
      setIsLoggedIn(false);
      setUserData({});
      toast(`Goodbye ${userData.firstName}`, {
        icon: '👏',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex justify-between bg-blue-500 p-6 text-white text-lg font-bold border-b-8 border-blue-200'>
      <Link to='/'>
        <h1>WDG18 BLOG APP</h1>
      </Link>
      <div className='flex items-center space-x-4'>
        {isLoggedIn ? (
          <div className='space-x-4'>
            <Link to='/post' className='cursor-pointer hover:opacity-80'>
              POST
            </Link>
            <button onClick={handleLogout}>LOGOUT</button>
            <p className='text-sm'>Welcome, {userData.firstName}</p>
          </div>
        ) : (
          <Link to='/login' className='cursor-pointer hover:opacity-80'>
            LOGIN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
