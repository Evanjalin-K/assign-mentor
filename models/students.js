const mongoose = require('mongoose');

const mentor = require('../models/mentors')

const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    course: String,
    mentor: { type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor'
    }
});

module.exports = mongoose.model('Student', studentSchema,'students');
