class student

//we can create multiple objects for a same class

//One way (Providing Hardcoded value)
{
//     setDetails()                //method
//     {
//         //variables
//         this.sid=101;
//         this.sname="John";
//         this.grade="A";
//     }

//     display()                   //method
//     {
//         console.log(this.sid, this.sname, this.grade);
//     }


//2nd way by passing arguments/parameters


    // setdetails1(id, namee, grade1)
    // {
    //     this.studentid=id;
    //     this.studentname=namee;
    //     this.studentgrade=grade1;
    // }

    // display1()
    // {
    //     console.log(this.studentid, this.studentname, this.studentgrade)
    // }

//3rd way by creating a constructor    
    constructor(id, namee, grade1)
    {
        this.studentid=id;
        this.studentname=namee;
        this.studentgrade=grade1;
    }

    display1()
    {
        console.log(this.studentid, this.studentname, this.studentgrade)
    }

}

//let stu=new student();            commenting out bcoz of the 3rd way

//1st way
// stu.setDetails();
// stu.display();

//2nd way
// stu.setdetails1(999, "AKSHAY", "AAA");
// stu.display1();

//3rd way
let stu=new student(101, "John", "A");
stu.display1();

let stu1=new student(102, "David", "B");
stu1.display1();

let stu2=new student(103, "Peter", "C");
stu2.display1();
