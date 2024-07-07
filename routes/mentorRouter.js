const express = require('express');
const mentorRouter = express.Router();
const mentorController = require('../controller/mentorController');

mentorRouter.post('/', mentorController.createMentor);


module.exports = mentorRouter;
