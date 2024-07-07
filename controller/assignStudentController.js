const Mentor = require('../models/mentors');
const Student = require('../models/students');

const assignStudentController = {
  assignStudentsToMentor: async (req, res) => {
    try {
      const { mentorId } = req.params;
      const { studentIds } = req.body;

      const mentor = await Mentor.findById(mentorId);
      if (!mentor) {
        return res.status(404).json({ message: 'Mentor not found' });
      }

      const students = await Student.find({ _id: { $in: studentIds } });
      if (students.length !== studentIds.length) {
        return res.status(404).json({ message: 'One or more students not found' });
      }

      const alreadyAssignedStudents = students.filter(student => mentor.students.includes(student._id.toString()));
      if (alreadyAssignedStudents.length > 0) {
        const studentNames = alreadyAssignedStudents.map(student => student.name).join(', ');
        return res.status(400).json({ message: `Students (${studentNames}) are already assigned to this mentor` });
      }

      students.forEach(student => {
        student.mentor = mentor._id;
        mentor.students.push(student._id);
      });

      await Promise.all([mentor.save(), ...students.map(student => student.save())]);

      res.json({ message: 'Students assigned to mentor successfully' });
    } catch (error) {
      console.error('Error assigning students to mentor:', error);
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = assignStudentController;
