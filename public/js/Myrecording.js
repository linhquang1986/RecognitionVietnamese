"use strict"
var recognition = null;
function speak(msg) {
    responsiveVoice.speak(msg, "Vietnamese Male");
}
function start() {
    try {
        if (recognition)
            recognition = null;
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
        recognition.lang = 'vi-VN';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;
        recognition.start();

        recognition.onresult = function (event) {
            let text = event.results[0][0].transcript;
            let data = { message: text }
            console.log('You said: ', text);
            if (text == 'Xin chào') {
                $.ajax({
                    type: 'POST',
                    url: '/wit/message',
                    contentType: 'application/json; charset=utf-8',
                    dataType: "json",
                    data: JSON.stringify(data),
                    success: res => {
                        speak(res[0].value)
                    }
                })
            } else speak('Bạn vừa nói ' + text);
        };
        recognition.onend = () => {
            start();
        }
    }
    catch (e) {
        console.error('Brower is not support!');
    }
}
start();