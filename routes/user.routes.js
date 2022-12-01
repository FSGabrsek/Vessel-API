const express = require('express');
const authenticationController = require('../controllers/authentication.controller');
const authenticationMiddle = require('../controllers/middleware/authentication.middle');
const devUtils = require('../controllers/utils/dev.utils');

const router = express.Router();

router.post(
    '/register',
    authenticationController.register
);

router.post(
    '/login',
    authenticationController.login
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