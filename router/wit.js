"use strict"
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var witController = require('../controllers').witController;

router.use(bodyParser.json());

router.post('/message', witController.message)

module.exports = router;