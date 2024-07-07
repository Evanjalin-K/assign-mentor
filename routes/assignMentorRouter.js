const express = require('express');
const assignMentorRouter = express.Router();
const assignMentorController = require('../controller/assignMentorController');

assignMentorRouter.post('/:studentId/assign-mentor', assignMentorController.assignMentorToStudent);

module.exports = assignMentorRouter;
