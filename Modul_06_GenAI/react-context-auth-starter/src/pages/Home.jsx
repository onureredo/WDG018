import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_URL + '/api/events');
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchEvents();
  }, []);

  return <div>Nothing like Home</div>;
};

export default Home;
