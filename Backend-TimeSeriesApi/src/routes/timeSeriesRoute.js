const timeSeriesController = require("../controllers/timeSeriesController");
const valTimeSeries = require("../middleware/validatation");

const express = require('express');
const router = express.Router();


router.get('/',timeSeriesController.getAllTimeSeries);
router.post('/',valTimeSeries,timeSeriesController.addTimeSeries);


module.exports = router;