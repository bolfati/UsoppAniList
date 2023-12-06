const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Comments extends Model {}

//Comments Table

Comments.init({
  comment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [280],
    },
  },
  animeId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'anime',
      key: 'animeId',
    },
  },
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: 'comments',
});

module.exports = Comments;
