# Mentor and Student Assigning with Database
1. Write API to create Mentor:

 - Mentor schema has been created

```
const mentorSchema = new mongoose.Schema({
    name: String,
    email: String,
    course: String,
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
    }]
    });
```    
2. Write API to create Student

 - Student schema has been created

 ```
 const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    course: String,
    mentor: { type: mongoose.Schema.Types.ObjectId,
        ref: 'Mentor'
    }
});
```
3. Write API to Assign a student to Mentor

  - Select one mentor and Add multiple Student 
  - A student who has a mentor should not be shown in List

4. Write API to Assign or Change Mentor for particular Student

  - Select One Student and Assign one Mentor

5. Write API to show all students for a particular mentor
6. Write an API to show the previously assigned mentor for a particular student.

### Packages Used:
 
 - npm init
 - npm install mongoose
 - npm install express
 - npm install dev
 - npm install dotenv

