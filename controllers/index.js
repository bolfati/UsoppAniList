//All routes below

const router = require('express').Router();
const path = require('path');
const homeRoute = require('./homeRoute');

//router.use for all below

router.use('/', homeRoute);

module.exports = router;
