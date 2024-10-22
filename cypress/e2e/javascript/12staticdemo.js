//we don't need to use let/var/constant while creating a variables in classes
//we use static variables to use less memory

class Test
{
    static a=10;                   //class variables > static variables after adding static word
    b=20;

static m1()
{
    console.log("This is static method");
}

m2()
{
    console.log("This is not static method");
}

}

// 1)we  can directly access static variables and methods using class name
// 2)Normally we create a object of a class and then access methods in it 

console.log(Test.a);    //10
Test.a=1000;            //we can directly modify value here and again log it
console.log(Test.a);   

console.log(Test.b);    //undefined

// Test.m1();              //This is static method
// Test.m2();              //error

// 3)we can access non-static variables & methods using object

let t=new Test();
// const/let t=new Test();
console.log(t.b);
t.m2();


