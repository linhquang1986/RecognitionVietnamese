"use strict"
var express = require('express');
var router = express.Router();

let upload = require('./uploadImg');
let wit = require('./wit');
router.use('/upload', upload);
router.use('/wit', wit);


module.exports = router;