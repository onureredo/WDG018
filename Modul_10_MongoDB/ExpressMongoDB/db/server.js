import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
    console.log(connection.connection.db.databaseName);
  } catch (error) {
    console.log('Connection error:', error.stack);
    process.exit(1);
  }
};

connectDB();

// try {
//   await mongoose.connect(process.env.MONGO_URI);
//   console.log('connected to MongoDB');
// } catch (error) {
//   console.log('Connection error:', error.stack);
//   process.exit(1);
// }
