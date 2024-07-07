const express = require('express');
const studentsForMentorRouter = express.Router();
const studentsForMentorController = require('../controller/studentsForMentorController'); 

studentsForMentorRouter.get('/:mentorId/students', studentsForMentorController.getStudentsByMentor);

module.exports = studentsForMentorRouter;
