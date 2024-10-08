import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
  },
  isbn: {
    type: String,
    minlength: 10,
    maxlength: 20,
    required: [true, 'ISBN is required'],
  },
});

export default mongoose.model('Book', bookSchema);
