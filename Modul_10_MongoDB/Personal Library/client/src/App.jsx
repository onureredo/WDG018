import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BooksList from './pages/BooksList';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<BooksList />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
