import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        formData,
        { withCredentials: true }
      );

      if (response.status === 201) {
        navigate('/login');
        toast.success('Successfully registered! Welcome!');
      }
    } catch (error) {
      toast.error(error.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div className='container mx-auto max-w-md rounded-xl shadow-xl shadow-gray-500 mt-8'>
      <div className='p-4'>
        <h2 className='text-2xl font-semibold mb-4'>Register</h2>
        <form onSubmit={handleRegister}>
          <div className='mb-4'>
            <label className='mb-2 block'>First Name:</label>
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              required
              className='border rounded w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <label className='mb-2 block'>Last Name:</label>
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              required
              className='border rounded w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <label className='mb-2 block'>Username:</label>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
              className='border rounded w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <label className='mb-2 block'>Email:</label>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='border rounded w-full p-2'
            />
          </div>
          <div className='mb-4'>
            <label className='mb-2 block'>Password:</label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              className='border rounded w-full p-2'
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 text-white rounded p-2 mt-2'
          >
            Register
          </button>
        </form>
        <p className='mt-4'>
          Already have an account?{' '}
          <Link to='/login' className='text-blue underline'>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterForm;
