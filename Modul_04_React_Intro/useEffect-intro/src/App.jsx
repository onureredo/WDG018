import { useEffect, useState } from 'react';
import LightBulb from './components/LightBulb';

function App() {
  const [, setToggle] = useState(false);
  // const [starsData, setStarsData] = useState(null);
  const [count, setCount] = useState(0);
  const [isSwitched, setIsSwitched] = useState(false);

  // Wir können nicht direkt im Top Level einer Komponente state neu setzen (z.B. in einem fetch), das führt in einen Infinite Loop. Wenn wir state verändern, wird die Komponente neu gerendert (die Funktion neu ausgeführt). Das führ auch den state setter im Top Level code aus, was zum neu rendern führt...
  // fetch('https://stars-api-vmk.onrender.com/tars')
  //   .then((res) => res.json())
  //   .then((data) => setStarsData(data));

  // useEffect gibt uns eine Hintertür dafür. Damit können wir mit externen APIs (Fetch, DOM, Timer...) arbeiten und State neu setzen, ohne in Infinite Loops zu geraten.

  // useEffect hat diese Grundstruktur:
  // useEffect(effectFunktion, dependencyArray)

  // Ohne Dependency Array läuft die Funktion im Effect nach jedem Rendern
  // useEffect(() => {
  //   console.log('Ich laufe ohne Array');
  // });

  // Mit leerem Dependency Array läuft die Funktion einmal, nachdem die Komponente das erste Mal geladen wurde.
  useEffect(() => {
    console.log("%cIch laufe nur nach dem ersten 'mount'", 'background-color: green;');
    // fetch('https://stars-api-8vmk.onrender.com/stars')
    //   .then((res) => res.json())
    //   .then((data) => setStarsData(data));
  }, []);

  // Mit State im Dependency Array läuft der Effekt jedes Mal, wenn sich der State ändert.
  useEffect(() => {
    console.log('Ich laufe nur, wenn sich count verändert ', count);
  }, [count]);

  const handleSwitch = () => setIsSwitched((s) => !s);

  // Beispiel für einen globalen Event Listener, um auf bestimmten Tastendruck zu reagieren.
  useEffect(() => {
    const handleKeypress = (e) => {
      // console.log(e.key);
      // if (e.key === 'Escape') setIsSwitched(false);
      // if (e.key === 'Enter') setIsSwitched(true);
      if (e.key === 'Escape') handleSwitch();
    };
    document.addEventListener('keydown', handleKeypress);

    // Event Listener müssen wieder entfernt werden. Das wird im return eines Effekts gemacht.
    return () => document.removeEventListener('keydown', handleKeypress);
  }, []);

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
