const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');

//TODO: hash the PW here (look up how to hash pw again lol).

User.init({
    id: {
        type: DataTypes.INTERGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            //find out pw length with group
            len: [],
        }
    },
   hooks: {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    },
});

module.exports = User;