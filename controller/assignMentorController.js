const Student = require('../models/students');
const Mentor = require('../models/mentors');

const assignMentorController = {
  assignMentorToStudent: async (req, res) => {
    try {
      const { studentId } = req.params;
      const { mentorId } = req.body;

      const student = await Student.findById(studentId);
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      const mentor = await Mentor.findById(mentorId);
      if (!mentor) {
        return res.status(404).json({ message: 'Mentor not found' });
      }

      if (student.mentor && student.mentor.equals(mentorId)) {
        return res.status(400).json({ message: 'Student is already assigned to this mentor' });
      }

      student.mentor = mentorId;
      await student.save();

      if (!mentor.students.includes(studentId)) {
        mentor.students.push(studentId);
        await mentor.save();
      }

      res.json({ message: 'Mentor assigned to student successfully' });
    } catch (error) {
      console.error('Error assigning mentor to student:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = assignMentorController;
