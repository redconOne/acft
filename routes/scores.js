const express = require('express');
const router = express.Router();
const scoresController = require('../controllers/scores');
const { ensureAuth } = require('../middleware/auth');

router.get('/', ensureAuth, scoresController.getScores);
router.post('/setScores', scoresController.setScores);

module.exports = router;
