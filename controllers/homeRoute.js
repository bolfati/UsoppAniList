const router = require('express').Router();
const sequelize = require('sequelize');
//TODO: add authentication and finish route
//fill in path after auth is added in utils folder
const withAuth = require('../utils/auth');
const path = require('path');

//home route
router.get('/', async (req, res) => {
  try {
    return res.render('homepage');
  } catch (err) {
    return res.status(404).json(err);
  }
});

router.get('/angelbeats', withAuth, async (req, res) => {
  try {
    return res.render('angelbeats');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/clannad', withAuth, async (req, res) => {
  try {
    return res.render('clannad');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/onepiece', withAuth, async (req, res) => {
  try {
    return res.render('onepiece');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/violetevergarden', withAuth, async (req, res) => {
  try {
    return res.render('violetevergarden');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  try {
    return res.render('login');
  } catch (err) {
    //error status here
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  try {
    return res.render('signup');
  } catch (err) {
    //error status here
    res.status(500).json(err);
  }
});

module.exports = router;
