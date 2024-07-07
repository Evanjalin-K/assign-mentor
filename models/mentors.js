const mongoose = require('mongoose');
const student = require('../models/students')

const mentorSchema = new mongoose.Schema({
    name: String,
    email: String,
    course: String,
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
});

module.exports = mongoose.model('Mentor', mentorSchema,'mentors');
