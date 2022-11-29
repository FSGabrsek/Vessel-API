const express = require('express');
const router = express.Router();

router.post(
    '/user/:userId/soul/:soulId/review'
);

router.put(
    '/user/:userId/soul/:soulId/review/:reviewId'
);

router.delete(
    '/user/:userId/soul/:soulId/review/:reviewId'
);

module.exports = router;