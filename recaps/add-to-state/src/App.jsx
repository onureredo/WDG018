import { useState } from 'react';
import AddTree from './AddTree';

const initialState = [
  {
    id: 1,
    treeName: 'Oak',
    age: 345,
  },
  {
    id: 2,
    treeName: 'RedWood',
    age: 845,
  },
];

function App() {
  const [trees, setTrees] = useState(initialState);

  const greet = () => {
    console.log('Hallo!');
    console.log(trees);
  };

  return (
    <>
      <AddTree setTrees={setTrees} greet={greet} />
      {trees.map((tree) => (
        <p
          key={tree.id}
          onClick={() => {
            console.log('clicked ', tree.treeName);
            const treesWithoutThisOne = trees.filter((t) => t.id !== tree.id);
            setTrees(treesWithoutThisOne);
          }}
        >
          {tree.treeName} | {tree.age}
        </p>
      ))}
    </>
  );
}

export default App;
