import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const PostStuff = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
  });

  const { user } = useContext(AuthContext);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ ...formData, organizerId: user.id }),
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      For registered users only
      <form onSubmit={handleSubmit}>
        <input type='text' name='title' placeholder='title' value={formData.title} onChange={handleChange} />
        <br />
        <input type='date' name='date' placeholder='date' value={formData.date} onChange={handleChange} />
        <br />
        <input type='text' name='location' placeholder='location' value={formData.location} onChange={handleChange} />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostStuff;
