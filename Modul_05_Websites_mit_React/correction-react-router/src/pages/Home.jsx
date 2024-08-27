import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [pokemons, setPokemons] = useState(null);
  const [status, setStatus] = useState('loading'); // "loading", "success", "error"

  useEffect(() => {
    const controller = new AbortController();
    const fetchPokes = async () => {
      try {
        setStatus('loading');
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/', { signal: controller.signal });

        // await new Promise((resolve) => {
        //   setTimeout(() => {
        //     resolve();
        //   }, 10000);
        // });

        if (!res.ok) throw Error('Fetching failed');

        const data = await res.json();

        setPokemons(data.results);

        setStatus('success');
      } catch (error) {
        if (error.message === 'signal is aborted without reason') return;
        console.log(error);
        setStatus('error');
      }
    };

    fetchPokes();

    return () => controller.abort();
  }, []);

  return (
    <>
      <h1 className='text-2xl font-semibold text-center my-3'>Catch &apos;em all!</h1>
      <div className='flex max-w-screen-lg mx-auto flex-wrap justify-center items-center min-h-96 gap-4'>
        {status === 'loading' && <span className='loading loading-ring loading-lg'></span>}

        {status === 'error' && <span>Error, please retry</span>}

        {pokemons &&
          status === 'success' &&
          pokemons.map((poke) => {
            const id = poke.url.split('/').at(-2);

            return (
              <Link to={`pokemon/${poke.name}`} key={poke.url} className='card bg-accent w-96 shadow-xl'>
                <div className='card-body '>
                  <h2 className='card-title capitalize'>{poke.name}</h2>
                </div>
                <figure>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    alt={poke.name}
                  />
                </figure>
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default Home;
