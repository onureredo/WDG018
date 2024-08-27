import { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';

const SinglePokemon = () => {
  const { name } = useParams();

  const [pokemon, setPokemon] = useState(null);
  const [status, setStatus] = useState('loading'); // "loading", "success", "error"

  const url = 'https://pokeapi.co/api/v2/pokemon/' + name;

  useEffect(() => {
    const controller = new AbortController();
    const fetchPokes = async () => {
      try {
        setStatus('loading');
        const res = await fetch(url, { signal: controller.signal });

        // await new Promise((resolve) => {
        //   setTimeout(() => {
        //     resolve();
        //   }, 10000);
        // });

        if (!res.ok) throw Error('Fetching failed');

        const data = await res.json();

        setPokemon(data);

        setStatus('success');
      } catch (error) {
        if (error.message === 'signal is aborted without reason') return;
        console.log(error);
        setStatus('error');
      }
    };

    fetchPokes();

    return () => controller.abort();
  }, [url]);

  console.log(pokemon);
  return (
    <div>
      {status === 'loading' && <span className='loading loading-ring loading-lg'></span>}
      {status === 'error' && <span>Error, please retry</span>}
      {pokemon && status === 'success' && (
        <div className='card lg:card-side bg-base-100 shadow-xl'>
          <figure>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
              alt='Album'
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title capitalize'>{pokemon.name}</h2>
            <div className='w-52'>
              <div className='flex gap-2 items-center justify-between w-full px-3'>
                <label htmlFor='hp'>HP</label>
                <meter value={pokemon.stats[0].base_stat} max='200' id='hp'>
                  HP
                </meter>
              </div>
              <div className='flex gap-2 items-center justify-between w-full px-3'>
                <label htmlFor='attack'>Attack</label>
                <meter
                  className='[&::-webkit-meter-optimum-value]:bg-red-500'
                  value={pokemon.stats[1].base_stat}
                  max='200'
                  id='attack'
                >
                  Attack
                </meter>
              </div>
              <div className='flex gap-2 items-center justify-between w-full px-3'>
                <label htmlFor='defense'>Defense</label>
                <meter
                  className='[&::-webkit-meter-optimum-value]:bg-blue-500'
                  value={pokemon.stats[2].base_stat}
                  max='200'
                  id='defense'
                >
                  Defense
                </meter>
              </div>
              <div className='flex gap-2 items-center justify-between w-full px-3 pb-3'>
                <label htmlFor='defense'>Speed</label>
                <meter
                  className='[&::-webkit-meter-optimum-value]:bg-amber-500'
                  value={pokemon.stats[3].base_stat}
                  max='200'
                  id='defense'
                >
                  Defense
                </meter>
              </div>
            </div>
            <div className='card-actions justify-end'>
              <Link to='/' className='btn btn-primary'>
                Back
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SinglePokemon;
