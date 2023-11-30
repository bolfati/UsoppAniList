const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');

/*Comments Table, Anime Table */

//Anime Table
const Anime = sequelize.define('anime', {
    AnimeID: { 
        type: ,
        primaryKey: true,
        autoIncrement: true,
    },
    Title: ,
    CoverImage: ,
    Synopsis: ,
})