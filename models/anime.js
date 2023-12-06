const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Anime extends Model {}
//Anime Table
Anime.init({
  id: {
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
  sequelize,
  timestamps: false,
  modelName: 'anime',
});

module.exports = Anime;
