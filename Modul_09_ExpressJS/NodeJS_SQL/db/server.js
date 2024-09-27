import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: true,
  },
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
