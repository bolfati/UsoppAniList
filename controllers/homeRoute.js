const router = require('express').Router();

//fill in path after auth is added in utils folder
const auth = require('');

//home route
router.get('/', async (req, res) => {
  try {
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
