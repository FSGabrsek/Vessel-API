const express = require('express');
const devUtils = require('../controllers/utils/dev.utils');

const router = express.Router();

router.post(
    '/register',
    devUtils.niResponse
);

router.post(
    '/login',
    devUtils.niResponse
);

router.get(
    '/user/:userId',
    devUtils.niResponse
);

router.put(
    '/user/:userId',
    devUtils.niResponse
);

router.post(
    '/user/:userId/follower',
    devUtils.niResponse
);

router.get(
    '/user/:userId/follower',
    devUtils.niResponse
);

router.delete(
    '/user/:userId/follower/:followerId',
    devUtils.niResponse
);

module.exports = router;