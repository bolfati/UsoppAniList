const router = require('express').Router();
const sequelize = require('sequelize');
//TODO: add authentication and finish route
//fill in path after auth is added in utils folder
const withAuth = require('../utils/auth');
const path = require('path');

//home route
router.get('/', async (req, res) => {
  if(!req.session.loggedIn){
    //TODO: finish this
    return res.render('homepage')
  }
  try {
    res.\\\
  } catch (err) {}
});

router.get('/login', (req, res) => {
  try {
    return res.render('login');
  } catch (err) {
    //error status here
    res.status().json(err);
  }
});
