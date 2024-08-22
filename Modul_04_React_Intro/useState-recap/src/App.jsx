import { useState } from 'react';
import Counter from './components/Counter';
import LightBulb from './components/LightBulb';
import ContactForm from './components/ContactForm';

function App() {
  const [numberOne, setNumberOne] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [numberThree, setNumberThree] = useState(0);

  const [isSwitched, setIsSwitched] = useState(false);

  const handleChange = () => {
    // const newState = isSwitched ? false : true
    // setIsSwitched(newState)
    setIsSwitched((prev) => !prev);
  };

  return (
    <>
      <h1>useState Korrekturen</h1>
      <Counter number={numberOne} setNumber={setNumberOne} />
      {/* <Counter number={numberOne} setNumber={setNumberOne} /> */}
      {/* <Counter number={numberOne} setNumber={setNumberOne} /> */}
      <Counter number={numberTwo} setNumber={setNumberTwo} />
      <Counter number={numberThree} setNumber={setNumberThree} />
      <br />
      <br />
      <button onClick={handleChange}>Switch</button>
      <LightBulb isSwitched={isSwitched} />
      <ContactForm />
    </>
  );
}

export default App;
