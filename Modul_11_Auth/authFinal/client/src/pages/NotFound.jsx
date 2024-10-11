import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-5xl font-bold text-gray-700'>404 Not Found</h1>
        <Link to='/'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-bold p-2 mt-2 rounded-lg'>
            GO BACK
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
