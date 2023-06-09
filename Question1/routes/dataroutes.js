const express = require('express');
const { GetTrainDetails, getTrain } = require('../controllers/dataControl');
const router = express.Router();

router.get('/getdetails/:price' , GetTrainDetails);
router.get('/traindetails/:number' , getTrain);
module.exports = router;