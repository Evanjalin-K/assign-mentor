const express = require('express');
const unassignedStudentController = require('../controller/unassignedStudentController');

const unassignedStudentRouter = express.Router();


unassignedStudentRouter.get('/', unassignedStudentController.getStudentsWithoutMentor);

module.exports = unassignedStudentRouter;