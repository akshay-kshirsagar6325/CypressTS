//To increase reusability of the code
//Lets consider two classes A and B. A and B contains some variables and methods
//If we want to use few methods from A class to B class then we can use inheritance 
//We can extends the class A using the extend keyword. class B extends class A
//We can reduce the method count with this. Common methods can we written in a different class and then we can use those by extending it
//In this case A will be parent/super/base class and B will be child/sub/derived class
//Types of inheritance: Single inheritance 1 class to another class (A to B), Multilevel inheritance (A to B to C) for B A is parent for C B is parent, Hierachry inheritance (A to B, C, D)


class A
{
    a=100;
    display()
    {
        console.log(this.a);
    }

}

class B extends A
{
    b=200;
    show()
    {
        console.log(this.b);
    }

}

//we created the object of class B so that we can use properties from both the classes

const bobject=new B();
bobject.show();
bobject.display();