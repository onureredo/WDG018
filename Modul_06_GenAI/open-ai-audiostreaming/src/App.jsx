import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom';
import { Chat, Settings } from '@/pages';
import { MainLayout } from '@/layouts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<Chat />} />
      <Route path='settings' element={<Settings />} />
    </Route>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
