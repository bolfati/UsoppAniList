const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Anime extends Model {}

Anime.init(
  {
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
    anime_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'anime',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    underscored: true,
    timestamps: false,
    modelName: 'anime',
  },
);

module.exports = Anime;
