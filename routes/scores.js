const express = require('express');
const router = express.Router();
const scoresController = require('../controllers/scores');
const { ensureAuth } = require('../middleware/auth');

router.get('/', ensureAuth, scoresController.getScores);

router.post('/setScores', scoresController.setScores);

router.put('/updateScores', scoresController.updateScores);

router.delete('/deleteScores', scoresController.deleteScores);

module.exports = router;
