import { useState } from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import SecondBtn from '../components/SecondBtn';
import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';

function App() {
  // Logik Teil
  const [wert, setWert] = useState(0);

  // Komponenten sind einfach Funktionen
  // möglich, aber nicht empfohlene Schreibweise
  // const btn = Button({ text: 'Ich bin ein zweiter Button!' });

  useEffect(() => {
    console.log('Ohne Dependency Array - läuft *nach* jedem Rendern');
  });

  useEffect(() => {
    console.log('Leeres Dependency Array - läuft nur beim ersten Mal');
  }, []);

  useEffect(() => {
    console.log("Abhängig von 'wert' - läuft immer, wenn 'wert' sich verändert");
  }, [wert]);

  // Normale Variablen können immer noch benutzt werden
  const txt = 'Ich komme von App.jsx 👋';
  // Manchmal sinnvoll, wenn man nur etwas von einem State ableiten möchte
  const double = wert * 2;

  // Eingene Hooks für wiederkehrende Aufgaben
  // const thing = useFetch('https://v2.jokeapi.dev/joke/Programming?type=single');
  // const thing = useFetch('https://pokeapi.co/api/v2/pokemon');
  // console.log(thing);

  // normalerweise destrukturieren wir gleich
  const { data, error, loading } = useFetch('https://pokeapi.co/api/v2/pokemon');

  // JSX/ Markup Teil
  return (
    <>
      <Header text={txt} />
      {/* <h1>Hallo, Welt!</h1>
      <Button className={'shadow-2xl'} text={'Ich bin ein Button!'} /> */}
      {/* {btn} */}
      {/* <SecondBtn>
        <h2>Click me!</h2>
      </SecondBtn> */}
      <p>State: {wert}</p>
      <button onClick={() => setWert(wert + 1)}>+1</button>

      {/* Conditional Rendering */}
      {/* {wert > 10 ? <button onClick={() => setWert(wert - 1)}>-1</button> : <p>🍞</p>} */}
      {wert > 10 && <button onClick={() => setWert(wert - 1)}>-1</button>}

      {/* {joke && <p>{joke}</p>} */}
    </>
  );
}

export default App;
