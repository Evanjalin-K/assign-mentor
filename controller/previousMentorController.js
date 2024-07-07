const Student = require('../models/students');
const Mentor = require('../models/mentors');

const previousMentorController = {

  getPreviousMentor: async (req, res) => {
    try {
      const { studentId } = req.params;

      const student = await Student.findById(studentId);
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      if (!student.mentor) {
        return res.status(404).json({ message: 'Student has no previous mentor assigned' });
      }

      const mentor = await Mentor.findById(student.mentor);
      if (!mentor) {
        return res.status(404).json({ message: 'Previous mentor not found' });
      }

      res.json({
        previousMentor: {
          mentorId: mentor._id,
          mentorName: mentor.name,
          mentorEmail: mentor.email
        }
      });
    } catch (error) {
      console.error('Error fetching previous mentor for student:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = previousMentorController;
