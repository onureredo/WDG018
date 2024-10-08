import React, { useState, useEffect } from 'react';
import {
  getUserById,
  markBookAsRead,
  removeBookFromList,
  userId,
} from '../services/apiService';

const Profile = () => {
  const [readingList, setReadingList] = useState([]);

  useEffect(() => {
    const fetchReadingList = async () => {
      try {
        const data = await getUserById(userId);
        setReadingList(data.readingList);
      } catch (error) {
        console.error('Error fetching reading list:', error);
      }
    };

    fetchReadingList();
  }, []);

  const handleMarkAsRead = async (readingListId) => {
    try {
      await markBookAsRead(userId, readingListId);
      setReadingList(
        readingList.map((book) =>
          book._id === readingListId ? { ...book, status: true } : book
        )
      );
    } catch (error) {
      console.error('Error marking book as read:', error);
    }
  };

  const handleRemoveBook = async (readingListId) => {
    try {
      await removeBookFromList(userId, readingListId);
      setReadingList(readingList.filter((book) => book._id !== readingListId));
    } catch (error) {
      console.error('Error removing book from reading list:', error);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <div className='max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg'>
        <h1 className='text-2xl font-bold mb-6'>Your Reading List</h1>

        {readingList.length === 0 ? (
          <p className='text-gray-500'>Your reading list is empty.</p>
        ) : (
          <div className='space-y-6'>
            {readingList.map((book) => (
              <div
                key={book._id}
                className='flex justify-between items-center bg-white p-4 rounded-lg shadow-lg'
              >
                <div className='flex-1'>
                  {book.bookRefId ? (
                    <>
                      <p className='text-lg font-semibold text-gray-800'>
                        {book.bookRefId.title}
                      </p>
                      <p className='text-sm text-gray-800'>
                        {book.bookRefId.author}
                      </p>
                      <p className='text-sm text-gray-800'>
                        ISBN: {book.bookRefId.isbn}
                      </p>
                      <p className='text-sm text-gray-800 '>
                        Status: {book.status ? 'Finished' : 'Not Finished'}
                      </p>
                    </>
                  ) : (
                    <p className='text-sm text-gray-500'>
                      Unknown book (no reference)
                    </p>
                  )}
                </div>

                <div className='space-x-4'>
                  {!book.status && (
                    <button
                      onClick={() => handleMarkAsRead(book._id)}
                      className='py-2 px-4 bg-green-500 text-white font-semibold rounded hover:bg-green-600 transition-colors'
                    >
                      Mark as Read
                    </button>
                  )}
                  <button
                    onClick={() => handleRemoveBook(book._id)}
                    className='py-2 px-4 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition-colors'
                  >
                    Remove from List
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
