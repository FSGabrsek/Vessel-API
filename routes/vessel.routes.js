const express = require('express');
const devUtils = require('../controllers/utils/dev.utils');

const router = express.Router();

router.put(
    '/vessel/:vesselId',
    devUtils.niResponse
);

module.exports = router;