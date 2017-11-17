var express = require('express');
var router = express.Router();
var drinkCtrl = require('../controllers').drinkController
var bodyparser = require('body-parser');
router.use(bodyparser.json());

router.post('/addMenu', drinkCtrl.addMenu)

router.post('/addDrinks', drinkCtrl.addDrink)

router.get('/getAllMenu', drinkCtrl.getAllMenu)

router.get('/getAllDrink', drinkCtrl.getAllDrink)

router.get('/getDrinkByMenu/:id', drinkCtrl.getDrinkByMenu)

module.exports = router;