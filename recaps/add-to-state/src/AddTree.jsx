import { useState } from 'react';

const AddTree = (props) => {
  const [formState, setFormState] = useState({
    treeName: '',
    age: 0,
  });

  const handleChange = (e) => {
    // const newState = { ...formState, [e.target.name]: e.target.value };

    setFormState((oldState) => {
      return { ...oldState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    props.greet();

    // const newTree = { ...formState, id: crypto.randomUUID() };
    // eslint-disable-next-line react/prop-types
    props.setTrees((oldEntries) => {
      return [{ ...formState, id: oldEntries.length + 1 }, ...oldEntries];
    });
  };

  console.log(props);
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='treeName' value={formState.treeName} onChange={handleChange} />
      <input type='number' name='age' value={formState.age} onChange={handleChange} />
      <button>Add Tree</button>
    </form>
  );
};

export default AddTree;
