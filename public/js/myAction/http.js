"use strict"

var get = (url, callback) => {
    $.ajax({
        type: 'GET',
        //url wit API
        url: url,
        contentType: 'application/json; charset=utf-8',
        dataType: "json",
        success: data => {
            callback(data);
        }
    })
}

var post = (url, data, callback) => {
    $.ajax({
        type: 'POST',
        //url wit API
        url: url,
        contentType: 'application/json; charset=utf-8',
        dataType: "json",
        data: JSON.stringify(data),
        success: data => {
            callback(data);
        }
    })
}