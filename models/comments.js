const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');

//Comments Table

Comments.init({
    commentId: {
        type: DataTypes.INTERGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: DataTypes.INTERGER,
        allowNull: false,
    },

})