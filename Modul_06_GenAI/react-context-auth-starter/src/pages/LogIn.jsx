import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const LogIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const { token, user } = await res.json();
      // console.log(data);
      setUser(user);
      localStorage.setItem('token', token);
      navigate('/user/post-stuff');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      Log in
      <form onSubmit={handleSubmit}>
        <input type='email' name='email' placeholder='email' value={formData.email} onChange={handleChange} />
        <br />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default LogIn;
