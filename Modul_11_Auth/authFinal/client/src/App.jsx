import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import MainLayout from './layouts/MainLayout';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CreatePost from './components/CreatePost';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <>
      <MainLayout />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/post' element={<CreatePost />} />
        <Route path='/posts/:id' element={<SinglePost />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
