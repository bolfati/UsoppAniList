const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');

/*Comments Table, Anime Table */

//Anime Table
Anime.init({
    AnimeID: {
        type: DataTypes.INTERGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Title: ,
    CoverImage: ,
    Synopsis: ,
})