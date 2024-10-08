import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'firstname is required'],
  },
  lastName: {
    type: String,
    required: [true, 'lastname is required'],
  },
  readingList: [
    {
      bookRefId: {
        type: mongoose.Schema.Types.ObjectId, // ref. zu Books
        ref: 'Book',
        required: true,
      },
      status: {
        type: Boolean,
        default: false,
      },
    },
  ],
});

export default mongoose.model('User', userSchema);
