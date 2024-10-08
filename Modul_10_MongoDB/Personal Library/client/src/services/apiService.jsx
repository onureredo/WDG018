import axios from 'axios';

const API = import.meta.env.VITE_API;

export const userId = '66ffda9c961ed6ec0fb18872';
export const user = { firstName: 'Sia', lastName: 'Mehrnia' };

export const getAllBooks = async () => {
  try {
    const response = await axios.get(`${API}/books`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books', error);
  }
};

export const getBookById = async (bookId) => {
  try {
    const response = await axios.get(`${API}/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching book with id: ${bookId}`, error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${API}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users', error);
  }
};

export const getUserById = async (userId) => {
  try {
    const response = await axios.get(`${API}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users by id', error);
  }
};

export const addToReadingList = async (userId, bookRefId) => {
  try {
    const response = await axios.post(`${API}/users/${userId}/books`, {
      bookRefId,
    });
    return response.data;
  } catch (error) {
    console.error(`Error adding book to user's reading list: ${userId}`, error);
  }
};

export const markBookAsRead = async (userId, bookId) => {
  try {
    const response = await axios.put(`${API}/users/${userId}/books/${bookId}`);
    return response.data;
  } catch (error) {
    console.error(`Error toggling book status for user: ${userId}`, error);
  }
};

export const removeBookFromList = async (userId, bookId) => {
  try {
    const response = await axios.delete(
      `${API}/users/${userId}/books/${bookId}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error removing book from user's list: ${userId}`, error);
  }
};
