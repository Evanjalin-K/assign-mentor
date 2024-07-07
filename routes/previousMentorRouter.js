const express = require('express');
const previousMentorRouter = express.Router();
const previousMentorController = require('../controller/previousMentorController');

previousMentorRouter.get('/:studentId/previous-mentor', previousMentorController.getPreviousMentor);

module.exports = previousMentorRouter;
