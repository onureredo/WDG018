import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const PostStuff = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
  });

  // Wir brauchen den user und holen ihn uns aus dem Context.
  const { user } = useContext(AuthContext);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Viele typischen Elemente einer submit/fetch-Funktion fehlen hier noch. Vor allem Checks nach möglichen Fehlern, Ladezustand und User-Feedback bei Errors.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(import.meta.env.VITE_API_URL + '/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Beim geschützten Enpunkt müssen wir das token so mitschicken
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        // Füge dem Inhalt der Nachricht (body) den Inhalt der Form und die id des eingeloggten Users hinzu.
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
