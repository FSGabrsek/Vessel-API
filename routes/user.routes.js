const express = require('express');
const router = express.Router();

router.post(
    '/register'
);

router.post(
    '/login'
);

router.get(
    '/user/:userId'
);

router.put(
    '/user/:userId'
);

router.post(
    '/user/:userId/follower'
);

router.get(
    '/user/:userId/follower'
);

router.delete(
    '/user/:userId/follower/:followerId'
)

module.exports = router;