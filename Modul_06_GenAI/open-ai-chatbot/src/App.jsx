import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import ChatInterface from './pages/ChatInterface';
import Settings from './pages/Settings';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<ChatInterface />} />
      <Route path='settings' element={<Settings />} />

      {/* <Route path='admin' element={<ProtectedLayout />}>
        <Route index element={<CreatePost />} />
      </Route> */}
    </Route>
  )
);
const App = () => <RouterProvider router={router} />;

export default App;
