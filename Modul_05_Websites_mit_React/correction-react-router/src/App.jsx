import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import SinglePokemon from './pages/SinglePokemon';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='pokemon/:name' element={<SinglePokemon />} />
      <Route path='*' element={<h1>404 Pokemon not found :(</h1>} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
