import { createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import PostStuff from './pages/PostStuff';
import ProtectedLayout from './layouts/ProtectedLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='login' element={<LogIn />} />
      <Route path='signup' element={<SignUp />} />
      {/* Alle geschützten Inhalte sind in einem extra Layout, das den Zustand eingeloggt/ausgeloggt überprüft */}
      <Route path='user' element={<ProtectedLayout />}>
        <Route path='post-stuff' element={<PostStuff />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
