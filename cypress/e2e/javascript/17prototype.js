
//Protype is an object that is associated with every function & object by default.
//If we want to add new properties at later stage to a function/class, we can take the help of prototype
//we can add variables, methods & functions using prototype.

function student()
{
    this.name="John";
    this.gender="male"
}

student.prototype.age=35;       //now age is belong to both the objects i.e. stu1 & stu2

stu1=new student();
//stu1.age=35;                //we added one new variable to above function using this object
                            //but we can't access this value using the another object for that we will use prototype

console.log(stu1.name, stu1.gender, stu1.age);

stu2=new student();
console.log(stu2.name, stu2.gender, stu2.age);





