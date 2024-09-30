import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  connectionString: process.env.PG_URI,
});

const connectDB = async () => {
  try {
    await pool.connect();
    console.log('Connected to Neon PostgreSQL');
  } catch (error) {
    console.error('Connection error', error.stack);
  }
};

connectDB();

export default pool;
