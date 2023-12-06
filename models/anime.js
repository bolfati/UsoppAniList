const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Anime extends Model {}

Anime.init({
<<<<<<< HEAD
  ad: {
=======
  id: {
>>>>>>> 8f7c7320d35b18a3cb6fbfbba174a07c8a8ad7f5
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  videoUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  tags: {
    type: DataTypes.STRING,
  },
  anime_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'anime', // Name of the referenced table
      key: 'id', // Name of the referenced column
    },
  },
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'anime',
});

module.exports = Anime;