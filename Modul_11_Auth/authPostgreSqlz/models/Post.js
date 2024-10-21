import { DataTypes } from 'sequelize';
import sequelize from '../db/server.js';
import User from './User.js';

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

Post.belongsTo(User, { foreignKey: 'author' });
User.hasMany(Post, { foreignKey: 'author' });

export default Post;
