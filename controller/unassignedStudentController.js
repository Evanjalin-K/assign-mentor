const Student = require('../models/students');

const unassignedStudentController = {
  getStudentsWithoutMentor: async (req, res) => {
    try {
      const students = await Student.find({ mentor: { $exists: false } }).populate('mentor');
      res.json(students);
    } catch (error) {
      console.error('Error fetching students:', error);
      res.status(500).json({ message: error.message });
    }
  }
};
module.exports = unassignedStudentController;
