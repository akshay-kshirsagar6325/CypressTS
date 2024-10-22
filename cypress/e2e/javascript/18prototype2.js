


class Employees
{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;
    }
}

//lets add one more variable using prototype
//This value is accessible for all the objects i.e. emp1 & emp2

Employees.prototype.sal=50000;

// const emp1=new Employees(101,"David");
// console.log(emp1.eid, emp1.ename, emp1.sal);

// const emp2=new Employees(102,"John");
// console.log(emp2.eid, emp2.ename, emp2.sal);


//lets add a function using prototype

Employees.prototype.display=function()
                                {
                                    console.log(this.eid, this.ename, this.sal);
                                }


const emp1=new Employees(101,"David");
emp1.display();

const emp2=new Employees(102,"John");
emp2.display();