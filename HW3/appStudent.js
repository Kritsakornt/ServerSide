let register = require('./register');
let studentArray = []
let student = {
    "id": 1234,
    "Fullname": "AAA BBBB",
    "Curriculum": "IT"
}
//add an example student for 5 tume
studentArray = register.add(studentArray,student);
studentArray = register.add(studentArray,student);
studentArray = register.add(studentArray,student);
studentArray = register.add(studentArray,student);
studentArray = register.add(studentArray,student);

//delete last student for 2 time
studentArray = register.del(studentArray);
studentArray = register.del(studentArray);
console.log(studentArray);