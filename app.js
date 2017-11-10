var express = require('express');
var path = require('path');
var appConfig = require('./config');
var app = express();


let port = appConfig.server.port;

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


