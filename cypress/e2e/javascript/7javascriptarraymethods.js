let students=[10, 20, 30, 40];

console.log(students.toString()); //10,20,30,40
console.log(students.join("*"));  //10*20*30*40


//pop()
students=[10, 20, 30, 40];
console.log(students.pop())         //it will remove & then return the last element 
console.log(students)               //[ 10, 20, 30 ]

//push()
students=[10, 20, 30, 40];
console.log(students.push(50));     //it will add a new element & will also return the lenght of an array
console.log(students);              //[ 10, 20, 30, 40, 50 ]

//shift()
students=[10, 20, 30, 40];
console.log(students.shift());      //it will rmove the 1st element & elements will be moved to the lower index
console.log(students);              //[ 20, 30, 40 ]

//unshift()
students=[10, 20, 30, 40];          //it will add new ele on 1st place & move other elements index to upper side
console.log(students.unshift(50));
console.log(students);              //[ 50, 10, 20, 30, 40 ]

//deleting elements from array
students=[10, 20, 30, 40];   
delete students[0];
console.log(students);

//concat()  joining/merging 2 or more arrays
let arr1=[10,20];
let arr2=["A","B","c"];

console.log(arr1.concat(arr2));         //[ 10, 20, 'A', 'B', 'c' ]

let arr3=[30, 40, "z"];
console.log(arr1.concat(arr2,arr3));    //[10,  20, 'A', 'B', 'c', 30, 40,  'z']


//slice()
students=[10, 20, 30, 40];  
console.log(students.slice([1]));       //[ 20, 30, 40 ] it will create a new array from 20 number
console.log(students.slice([2]));       //[ 30, 40 ]     it will create a new array from 30 number


//sort()     it will sort the text/nubers alpha/desc order
let fruits=["Orange", "Lemon", "Mango", "Apple"];   //[ 'Apple', 'Lemon', 'Mango', 'Orange' ]
console.log(fruits.sort());

let nums=[500, 200, 100, 700];          //[ 100, 200, 500, 700 ]
console.log(nums.sort());

//reverse()
fruits=["Orange", "Lemon", "Mango", "Apple"]; 
console.log("Original array:"+fruits);              //Orange,Lemon,Mango,Apple
fruits.reverse();
console.log("After reversing the array:"+fruits);   //Apple,Mango,Lemon,Orange