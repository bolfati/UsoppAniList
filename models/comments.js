const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Comments extends Model {}

//Comments Table

Comments.init({
  comment_id: {
    type: DataTypes.INTERGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTERGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id',
    },
  },
  content: {
    //TODO:fill this in},
  },
  sequelize,
  timestamps: true,
  freezeTableName: true,
  underscored: true,
  modelName: 'comments',
});

module.exports = Comments;
