const express = require('express');
const mentorRouter = require('./routes/mentorRouter');
const studentRouter = require('./routes/studentRouter');
const assignStudentRouter = require('./routes/assignStudentRouter'); 
const unassignedStudentRouter = require('./routes/unassignedStudentRouter');
const assignMentorRouter = require('./routes/assignMentorRouter');
const studentsForMentorController = require('./controller/studentsForMentorController');
const studentsForMentorRouter = require('./routes/studentsForMentorRouter');
const previousMentorRouter = require('./routes/previousMentorRouter');
const {PORT}= require('./utils/config')
const app = express();

app.use(express.json());

app.use('/mentors', mentorRouter);
app.use('/students', studentRouter);
app.use('/students', assignStudentRouter); 
app.use('/unassigned_students', unassignedStudentRouter); 
app.use('/', assignMentorRouter)
app.use('/', studentsForMentorRouter)
app.use('/', previousMentorRouter)



app.listen(PORT, () => {

    console.log(`Connected to Server:http//:localhost:${PORT}`);

})

module.exports = app;
