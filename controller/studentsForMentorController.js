const Mentor = require('../models/mentors');
const Student = require('../models/students');

const studentsForMentorController = {

  getStudentsByMentor: async (req, res) => {
    try {
      const { mentorId } = req.params;

      const mentor = await Mentor.findById(mentorId).populate('students');
      if (!mentor) {
        return res.status(404).json({ message: 'Mentor not found' });
      }

      const students = mentor.students;

      res.json(students);
    } catch (error) {
      console.error('Error fetching students by mentor:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = studentsForMentorController;
