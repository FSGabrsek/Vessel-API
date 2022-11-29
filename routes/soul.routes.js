const express = require('express');
const router = express.Router();

router.post(
    '/user/:userId/soul'
);

router.get(
    '/user/:userid/soul'
);

router.get(
    '/user/:userId/soul/:soulId'
);

router.put(
    '/user/:userId/soul/:soulId'
);

router.delete(
    '/user/:userId/soul/:soulId'
);

module.exports = router;