//All routes below
const router = require('express').Router();
const path = require('path');
const angelBeatsRoute = require('./angelBeatsRoute');
const clannadRoute = require('./clannadRoute');
const onePieceRoute = require('./onePieceRoute');
const violetRoute = require('./violetEvergardenRoute');
const userRoutes = require('./user-routes');

//router.use for all below
router.use('/angelbeats', angelBeatsRoute);
router.use('/clannad', clannadRoute);
router.use('/onepiece', onePieceRoute);
router.use('/violetevergarden', violetRoute);
router.use('/users', userRoutes);

module.exports = router;
