//All routes below

const router = require.apply('express').Router();
const homeRoute = require('./homeRoute');
const angelBeatsRoute = require('./api/angelBeatsRoute');
const clannadRoute = require('./api/clannadRoute');
const onePieceRoute = require('./api/onePieceRoute');
const violetRoute = require('./api/violetEvergardenRoute');

//router.use for all below

router.use('/', homeRoute);
router.use('/angelbeats', angelBeatsRoute);
router.use('/clannad', clannadRoute);
router.use('/onepiece', onePieceRoute);
router.use('/violetevergarden', violetRoute);

module.exports = router;
