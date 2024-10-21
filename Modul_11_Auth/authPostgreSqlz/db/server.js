import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.PG_URI, {
  define: {
    freezeTableName: true,
  },
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connected to the NEON');

    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
  } catch (err) {
    console.error('DB connection error:', err);
  }
};

connectDB();

export default sequelize;
