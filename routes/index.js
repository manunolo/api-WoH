var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
	return res.json({
		data : {error : 'Ingrese una url valida'}
	})
});

module.exports = router;
