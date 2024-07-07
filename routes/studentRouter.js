const express = require('express');
const studentRouter = express.Router();
const studentController = require('../controller/studentController');

studentRouter.post('/', studentController.createStudent);


module.exports = studentRouter;