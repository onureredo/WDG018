import { useState, useEffect } from 'react';
import { addToReadingList, getAllBooks, userId } from '../services/apiService';

function BooksList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks();
        // console.log(data);
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books', error);
      }
    };

    fetchBooks();
  }, []);

  const handleAdd = async (bookId) => {
    try {
      await addToReadingList(userId, bookId);
      alert('Book added to your reading list!');
    } catch (error) {
      console.error('Error adding book to reading list', error);
    }
  };

  return (
    <div className='relative min-h-screen bg-gray-100 p-6'>
      <div className='max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold mb-6'>BOOKS</h2>
        <div className='space-y-6'>
          {books.map((book) => (
            <div
              key={book._id}
              className='flex justify-between items-center bg-white p-4 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105'
            >
              <div className='flex-1'>
                <p className='text-lg font-semibold text-gray-800'>
                  {book.title}
                </p>
                <p className='text-sm text-gray-500'>{book.author}</p>
                <p className='text-sm text-gray-500'>ISBN: {book.isbn}</p>
              </div>
              <div>
                <button
                  onClick={() => handleAdd(book._id)}
                  className='py-2 px-4 bg-orange-600 text-white font-semibold rounded hover:bg-orange-700 transition-colors'
                >
                  Add to Reading List
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BooksList;
