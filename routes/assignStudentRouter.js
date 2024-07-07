const express = require('express');
const assignStudentController = require('../controller/assignStudentController');

const assignStudentRouter = express.Router();

assignStudentRouter.post('/:mentorId', assignStudentController.assignStudentsToMentor);

module.exports = assignStudentRouter;
