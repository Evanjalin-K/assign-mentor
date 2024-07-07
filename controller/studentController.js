const Student = require('../models/students')
const studentController= {
createStudent: async (req, res) => {

    try {

        const { name, email, phone, course } = req.body;
        const student = await Student.findOne({email})

        if(student){
            return res.status(400).send({ message: 'Student already exists'});
        }
        const newstudent = new Student({ name, email, phone, course });
        
        const savedStudent = await newstudent.save();
        
        res.status(201).json(savedStudent);

    }
    catch(error)
    {
 console.error ('Error creating mentor', error);
 res.status(500).json({ message: error.message})

  }
}
}
module.exports= studentController;
