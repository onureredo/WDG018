import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      Sign up for our awsome service
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

export default SignUp;
