var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/add', itemsController.add);
router.post('/update', itemsController.update);
router.get('/get', itemsController.getbyuser);
router.get('/get/{id}', itemsController.getById);
router.get('/equiped/', itemsController.getEquiped);
router.delete('/delete/{id}', itemsController.getEquiped);

module.exports = router;
