import { useEffect, useState } from 'react';
import LightBulb from './components/LightBulb';

function App() {
  const [, setToggle] = useState(false);
  // const [starsData, setStarsData] = useState(null);
  const [count, setCount] = useState(0);
  const [isSwitched, setIsSwitched] = useState(false);

  // useEffect(() => {
  //   console.log('Ich laufe ohne Array');
  // });

  useEffect(() => {
    console.log("%cIch laufe nur nach dem ersten 'mount'", 'background-color: green;');
    // fetch('https://stars-api-8vmk.onrender.com/stars')
    //   .then((res) => res.json())
    //   .then((data) => setStarsData(data));
  }, []);

  useEffect(() => {
    console.log('Ich laufe nur, wenn sich count verändert ', count);
  }, [count]);

  const handleSwitch = () => setIsSwitched((s) => !s);

  useEffect(() => {
    const handleKeypress = (e) => {
      // console.log(e.key);
      // if (e.key === 'Escape') setIsSwitched(false);
      // if (e.key === 'Enter') setIsSwitched(true);
      if (e.key === 'Escape') handleSwitch();
    };
    document.addEventListener('keydown', handleKeypress);

    return () => document.removeEventListener('keydown', handleKeypress);
  }, []);

  // fetch('https://stars-api-8vmk.onrender.com/stars')
  //   .then((res) => res.json())
  //   .then((data) => setStarsData(data));

  console.log('Ich laufe im Top Level');
  // console.log(starsData);
  return (
    <>
      <h1>useEffect</h1>
      <button onClick={() => setToggle((t) => !t)}>Re-Render</button>
      <button onClick={() => setCount((c) => c + 1)}>Count {count}</button>

      <LightBulb isSwitched={isSwitched} />
    </>
  );
}

export default App;
