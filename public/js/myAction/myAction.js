"use strict"
var menuDrink = null;
function _startorder() {
    $('.listmenu').show();
    $('#mic-icon').hide();
    get('/drink/getAllMenu', data => {
        menuDrink = data;
        renderMenu(data)
    })
}

function _free() {
    $('#mic-icon').show();
    $('.listmenu').hide();
}

function getDrink(menuId) {
    get('/drink/getDrinkByMenu/' + menuId, data => {
        renderDrink(data);
    })
}