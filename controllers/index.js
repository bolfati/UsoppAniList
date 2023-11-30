//All routes below

const router = require.apply('express').Router();
const homeRoute = require('./homeRoute');

//router.use for all below

router.use('/', homeRoute);

module.exports = router;
