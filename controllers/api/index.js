//All routes below
const router = require('express').Router();
const path = require('path');
const angelBeatsRoute = require('./angelBeatsRoute');
const clannadRoute = require('./clannadRoute');
const onePieceRoute = require('./onePieceRoute');
const violetRoute = require('./violetEvergardenRoute');
const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const signupRoute = require('./signupRoute');

//router.use for all below
router.use('/angelbeats', angelBeatsRoute);
router.use('/clannad', clannadRoute);
router.use('/onepiece', onePieceRoute);
router.use('/violetevergarden', violetRoute);
router.use('/login', loginRoute);
router.use('/logout', logoutRoute);
router.use('/signup', signupRoute);

module.exports = router;
