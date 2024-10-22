// -Used to store multiple values in a single variable
// -let cars = ["Merc", "TATA", "Volvo"];
// -we can store multiple objects, values & functions inside the array
// -we can access arrays by index number. 
// -arrays are nothing but the object


//multiple ways to store values in array
let cars=["merc", "bmw", "tata"];
let cars1=new Array(100, 200, 300);

//multiple ways to print output/access elements
console.log(cars, cars1);
console.log(cars[0]);

//update the value
cars[0]="New1";
console.log(cars);

//number, string & boolean values
let myarray=["text", 100, true, 10.5];
console.log(myarray);
console.log(myarray.length);

//we can have objects in array
let person1=
    {
        firstname:"David",
        age:34
    };
let person2=
    {
        firstname:"john",
        age:30
    };

let myarray1=[person1,person2];
    console.log(myarray1);
    console.log(myarray1[0]);

//looping elements from array
let students = ["AK", "AB", "AC", "AD"];

for(let i=0; i<=students.length-1; i++)
{
    console.log(students[i]);
}


//looping elements from array using for/of loop
for (ele of students)
{
    console.log(ele);
}




