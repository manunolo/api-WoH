var express = require('express');
var router = express.Router();
var jugadoresController = require('../controllers/jugadores');

// Endpoint para equiparse un item
router.post('/items/equip', jugadoresController.equipItem);

// Endpoint para atacar
router.post('/attack', jugadoresController.attack);

module.exports = router;
