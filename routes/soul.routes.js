const express = require('express');
const devUtils = require('../controllers/utils/dev.utils');

const router = express.Router();

router.post(
    '/user/:userId/soul',
    devUtils.niResponse
);

router.get(
    '/user/:userid/soul',
    devUtils.niResponse
);

router.get(
    '/user/:userId/soul/:soulId',
    devUtils.niResponse
);

router.put(
    '/user/:userId/soul/:soulId',
    devUtils.niResponse
);

router.delete(
    '/user/:userId/soul/:soulId',
    devUtils.niResponse
);

module.exports = router;