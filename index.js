const Joi = require("joi"); //return a class
const express = require("express"); //express is the module name,it returns and function
const app = express(); //return an object

app.use(express.json());

//app.get('url','callback function/route handler')
const courses = [
  { id: "1", name: "course1" },
  { id: "2", name: "course2" },
  { id: "3", name: "course3" },
  { id: "4", name: "course4" },
];
app.get("/", (req, res) => {
  res.send(courses);
});
app.get("/api/courses", (req, res) => {
  //get list of courses from databse
  res.send(courses);
});
app.get("/api/courses/:id", (req, res) => {
  const { id } = req.params;
  const course = courses.find((c) => c.id === id);
  if (!course) {
    res.status(404).send("the course of given id is not found");
    return; 
} else {
    res.send(course);
  }
  //res.send(req.params)
  //query string param is to get additional data
});

app.post("/api/courses", (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  // if(!req.body.name||req.body.length<3)//validating input
  // {
  //     res.status(404).send('Name is required')
  //     return;

  // }
  const course = {
    id: courses.length + 1,
    name: req.body.name,
  };
  courses.push(course);
  res.send(course);
});

app.put("/api/courses/:id", (req, res) => {
  const { id } = req.params;
  const course = courses.find((c) => c.id === id);
  if (!course) {
    res.status(404).send("the course of given id is not found");
    return;
  }
  const { error } = validateCourse(req.body); //result.error
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  course.name = req.body.name;
  res.send(course);
});

function validateCourse(course) {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
}

app.delete("/api/courses/:id", (req, res) => {
  //look up the course
  //not exist,return 404
  const { id } = req.params;
  const course = courses.find((c) => c.id === id);
  if (!course) {
  return  res.status(404).send("the course of given id is not found");
  }

  //delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  //return the same cours
  res.send(course);
});
//env varibale is a varibale of the eniroment in whihch the process runs. its value is set outside the aplication
//use to set PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on the port  ${port}`));
