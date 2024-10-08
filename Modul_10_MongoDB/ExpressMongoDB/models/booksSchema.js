import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    unique: true,
    trim: true,
  },
  author: {
    type: String,
    required: [true, 'author is required'],
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Book', bookSchema);
