const express = require('express');
const { GetTrainDetails } = require('../controllers/dataControl');
const router = express.Router();

router.get('/getdetails/:price' , GetTrainDetails);
module.exports = router;