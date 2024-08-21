import { useState } from 'react';

function App() {
  // let count = 0;

  // const handleClick = () => {
  //   console.log("Alter Wert",count);
  //   count++;
  //   // Vanilla JS
  //   document.getElementById('count-span').textContent = count;
  //   console.log("Neuer Wert",count);
  // };

  // const state = useState('Velociraptor');
  // console.log('THIS IS STATE: ', state);
  // // [Wert, Funktion]
  const [count, setCount] = useState(0);
  const [dino, setDino] = useState('T-Rex');
  const [input, setInput] = useState('');
  const [showEdit, setShowEdit] = useState(false);

  // const handleClick = () => setCount(count - 1);

  // const handleClick = () =>
  //   setCount((vorherigerWert) => {
  //     console.log("vorheriger Wert",vorherigerWert);
  //     return vorherigerWert + 1;
  //   });

  const handleClick = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount((c) => c + 1);
    // setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  const handleChange = (event) => {
    // Packe in den State, was der User eintippt.
    setInput(event.target.value);
  };

  // JS Array Destructuring
  // const [firstValue, secondValue, , , fifthVal] = [1, 2, 3, 4, 5, 6];
  // console.log(fifthVal);
  return (
    <>
      <h1>React useState</h1>
      <div>
        <h2>Counter</h2>
        <p>Clicked: {count} times</p>
        <button onClick={handleClick}>Click</button>
      </div>
      <div>
        <h2>Dino</h2>
        <p>Mein Lieblingsdinosaurier ist: {dino}.</p>
        <button onClick={() => setShowEdit((frühererWert) => !frühererWert)}>Edit</button>
      </div>
      {showEdit && (
        <div>
          <input type='text' value={input} onChange={handleChange} />
          <button
            onClick={() => {
              setDino(input);
              setShowEdit(false);
              setInput('');
            }}
          >
            Setzte Dino
          </button>
        </div>
      )}
    </>
  );
}

export default App;
