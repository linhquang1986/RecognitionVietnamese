var express = require('express');
var path = require('path');
var appConfig = require('./config');
var app = express();
var mongoose = require('mongoose');
let morgan = require('morgan');


let port = appConfig.server.port;
if (appConfig.env !== 'test')
    app.use(morgan('combined'));
else
    port = appConfig.server_test.port;


app.use(express.static(path.join(__dirname, 'public')));

// router
app.use('/', require('./router'));

app.set('port', port)

let listener = app.listen(port, () => {
    console.log('Server running on localhost:' + listener.address().port);
});
// connetion Speech Client socket
var middleWebS = require('./middleware').webS;
var webS = new middleWebS(listener);
webS.connectionSpeechClient();


module.exports = app;// for testing


