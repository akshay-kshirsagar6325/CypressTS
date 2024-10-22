//wrapping of data/(variables) and methods/functions as a single unit is encapsulation

class student
{
    //Variables/data
    constructor()
    {
        let name,marks;         //we are going to work on this variables using the below methods
    }                           //we created a constructor to initiate/invoke the variables/methods directly at the time of object creation

    //Functions/methods
    getName()
    {
        return this.name;
    }
    setName(Testname)
    {
        this.name=Testname;         //this.name is class variable & Testname is method variable
    }

    getMarks()
    {
        return this.marks;
    }
    setMarks(marks)
    {
        this.marks=marks;           //marks value assign to this.marks
    }

}

let stu=new student();

//lets set the data first
stu.setName("John");
stu.setMarks(90);

//lets get the data
console.log(stu.getName(), stu.getMarks());