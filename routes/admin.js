var express = require('express');
var router = express.Router();
var adminController = require('../controllers/admin');

//Endpoints para los jugadores
router.post('/jugadores/new', adminController.addPlayer);
router.get('/jugadores/ultimate', adminController.getUltis);

//Endpoints para los items
router.post('/items/new', adminController.addItem);
router.put('/items/update', adminController.updateItem);

module.exports = router;
