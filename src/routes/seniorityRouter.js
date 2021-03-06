var express = require('express');
var router = express.Router();
const seniorityController = require('../controllers/seniorityController');
var cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// router.post('/',cors(corsOptions),seniorityController.create)
router.get('/',cors(corsOptions),seniorityController.index)
router.get('/:id',cors(corsOptions),seniorityController.show)
// router.put('/:id',cors(corsOptions),seniorityController.update)
// router.delete('/:id',cors(corsOptions),seniorityController.destroy);

module.exports = router