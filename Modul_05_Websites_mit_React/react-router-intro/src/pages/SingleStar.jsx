import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleStar = () => {
  const { id } = useParams();

  const [star, setStar] = useState(null);
  const [status, setStatus] = useState('loading'); // "loading", "success", "error"

  useEffect(() => {
    const controller = new AbortController();

    const fetchStars = async () => {
      try {
        setStatus('loading');
        const res = await fetch(`https://stars-api-8vmk.onrender.com/stars/${id}`, { signal: controller.signal });
        if (!res.ok) throw Error('Fetching failed');

        const data = await res.json();
        setStatus('success');
        setStar(data);
      } catch (error) {
        console.error(error);
        setStatus('error');
      }
    };

    fetchStars();

    return () => controller.abort();
  }, [id]);

  return (
    <div>
      Single Star No. {id}
      {star && status === 'success' && (
        <div className='card bg-base-100 image-full w-96 shadow-xl'>
          <figure>
            <img src={star.url} alt='Shoes' />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{star.heading}</h2>
            <p>{star.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleStar;
