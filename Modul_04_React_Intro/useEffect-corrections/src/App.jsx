import { useState } from 'react';
import Pokemons from './components/Pokemons';
import Candle from './components/Candle';

function App() {
  const [numPokes, setNumPokes] = useState(12);
  console.log(numPokes);
  return (
    <>
      <h1>useEffect Korrekturen</h1>
      <input
        type='range'
        name='num-pokes'
        id='num-pokes'
        min={1}
        max={150}
        value={numPokes}
        onChange={(e) => setNumPokes(e.target.value)}
      />
      <Pokemons numPokes={numPokes} />
      <Candle />
    </>
  );
}

export default App;
