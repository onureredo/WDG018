import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [stars, setStars] = useState(null);
  const [status, setStatus] = useState('loading'); // "loading", "success", "error"

  useEffect(() => {
    const controller = new AbortController();

    const fetchStars = async () => {
      try {
        setStatus('loading');
        const res = await fetch('https://stars-api-8vmk.onrender.com/stars', { signal: controller.signal });
        if (!res.ok) throw Error('Fetching failed');

        const data = await res.json();
        setStatus('success');
        setStars(data);
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    };

    fetchStars();

    return () => controller.abort();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className='flex flex-wrap gap-5 justify-center'>
        {stars &&
          status === 'success' &&
          stars.map((star) => (
            <Link to={`star/${star.id}`} key={'star-' + star.id} className='card bg-base-100 w-96 shadow-xl'>
              <div className='card-body'>
                <h2 className='card-title capitalize'>{star.heading}</h2>
              </div>
              <figure>
                <img src={star.url} alt='Shoes' />
              </figure>
            </Link>
          ))}
        {status === 'loading' && <span className='loading loading-bars loading-lg'></span>}
        {status === 'error' && <div>Error loading Elements</div>}
      </div>
    </>
  );
};

export default Home;
