"use strict"
var recognition = null;
function speak(msg) {
    responsiveVoice.speak(msg, "Vietnamese Male");
}
function sendWitAi(msg) {
    let data = { message: msg }
    $.ajax({
        type: 'POST',
        //url wit API
        url: '/wit/message',
        contentType: 'application/json; charset=utf-8',
        dataType: "json",
        data: JSON.stringify(data),
        success: res => {
            console.log(res)
            //speak(res[0].value)
        }
    })
}
function start() {
    try {
        if (recognition)
            recognition = null;
        //each system will support other methods
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        //about language support: https://cloud.google.com/speech/docs/languages
        recognition.lang = 'vi-VN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.start();
        recognition.onresult = function (event) {
            //your process handle
            let text = event.results[0][0].transcript;
            console.log('You said: ', text);
           // if (text == 'Xin chào') {
                //send text to Wit ai
                sendWitAi(text);
            //} else speak('Bạn vừa nói ' + text);
        };
        // if you do not speaking for a while, it will turn itself off
        // to recording forever, need should restart recording
        recognition.onend = () => {
            start();
        }
    }
    catch (e) {
        console.error('Brower is not support!');
    }
}
//start recording
start();