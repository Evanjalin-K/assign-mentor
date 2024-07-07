const Mentor = require('../models/mentors');

const mentorController = {
  createMentor: async (req, res) => {
    try {
      const { name, email, course } = req.body;
      const mentor = await Mentor.findOne({email})

        if(mentor){
            return res.status(400).send({ message: 'Mentor already exists'});
        }
      const newMentor = new Mentor({ name, email, course });
      const savedMentor = await newMentor.save();
      res.status(201).json(savedMentor);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = mentorController;
