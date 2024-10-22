
//person is a object which contains the below property
//we don't need to use let/var/constant while creating a variables in classes


let person=
{
    firstname:"John",    //property:value
    lastname:"kenedy",
    age:50,
    weight:60
}

//accessing object properties
console.log(person["firstname"])  //John
console.log(person.age) //50


//adding a new property to the existing object
person["height"]=5.5;
//person.height=5.5;                another way
console.log(person.height);

//update existing property
person["weight"]=70;
console.log(person.weight);

//remove property
delete person["age"];


//creating a function inside the object

let employee=
{
    empname:"scott",
    empid:999,
    job:"engineer",
    basicsal:50000,
    bonus: function()             //creating a function within object is a method
            {
                return ((this.basicsal * 10)/100);
            }
}

console.log(employee.bonus());
