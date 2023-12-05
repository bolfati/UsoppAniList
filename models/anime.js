const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Anime extends Model {}
//Anime Table
Anime.init({
  animeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  CoverImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Synopsis: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  sequelize,
  timestamps: false,
  modelName: 'anime',
});

module.exports = Anime;
