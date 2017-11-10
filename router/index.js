var express = require('express');
var router = express.Router();

let upload = require('./uploadImg');
router.use('/upload', upload)

module.exports = router;