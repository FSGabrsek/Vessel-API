const express = require('express');
const devUtils = require('../controllers/utils/dev.utils');

const router = express.Router();

router.post(
    '/user/:userId/soul/:soulId/review',
    devUtils.niResponse
);

router.put(
    '/user/:userId/soul/:soulId/review/:reviewId',
    devUtils.niResponse
);

router.delete(
    '/user/:userId/soul/:soulId/review/:reviewId',
    devUtils.niResponse
);

module.exports = router;