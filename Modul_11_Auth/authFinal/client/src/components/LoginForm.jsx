import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuth } from '../context/AuthProvider';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setIsLoggedIn, checkUser } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        setIsLoggedIn(true);
        const user = await checkUser();

        if (user) {
          toast.success(`Welcome back, ${user.firstName}`);
        } else {
          toast.error("Couldn't retrieve user data.");
        }

        navigate('/');
      }
    } catch (error) {
      setError(error.response.data.error || 'Something went wrong');
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className='container mt-8 mx-auto max-w-md rounded-xl shadow-xl shadow-gray-500'>
      <div className='p-4'>
        <h2 className='text-2xl font-semibold mb-4'>Login</h2>
        {error && <p className='text-red-500 mb-4 font-semibold'>{error}</p>}
        <form onSubmit={handleLogin}>
          <div className='mb-4'>
            <label className='block mb-2'>Email:</label>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border rounded w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2'>Password:</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='border rounded w-full p-2'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 rounded text-white p-2 font-semibold'
          >
            LOGIN
          </button>
        </form>
        <p className='mt-4'>
          Not registered?{' '}
          <Link to='/register' className='text-blue-500 underline'>
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
