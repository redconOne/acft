const express = require('express');
const router = express.Router();
const recordsController = require('../controllers/records');
const { ensureAuth } = require('../middleware/auth');

router.get('/', ensureAuth, recordsController.getRecords);
router.put('/updateRecords', recordsController.updateRecords);
router.delete('/deleteRecords', recordsController.deleteRecords);
module.exports = router;
