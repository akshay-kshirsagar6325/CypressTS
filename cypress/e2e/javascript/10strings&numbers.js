//................................strings......................................

let s="welcome";
// let s=new string();

//charAt()
console.log(s.charAt(2));       //l

//concat()
console.log(s.concat(" to javascript programming"));
console.log(s.concat(" to javascript").concat(" programming"));     //we can concat more than two strings

//replace()
s="welcome to javascript";      //we are just changing the value of s
console.log(s.replace("javascript", "java"));       //welcome to java

//substring()       //we can extract required text
s="welcome"

console.log(s.substring(0,3));  //wel       //we will calculate starting char from 0 index and ending char from 1 index
console.log(s.substring(3,7));  //come

//tolowercase() & toUppercase()
s="WELcome"

console.log(s.toLowerCase());   //welcome
console.log(s.toUpperCase());   //WELCOME

//split()       //we can split the string into multiple parts
s="WELcome to javascript"

let arr=s.split(' ');       //it will split on the basis of "space" between the text. It will return the array value
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//trim()
s="  WELCOME   ";
console.log(s)
console.log(s.trim());      //it will print the value without space



//.........................Numbers...............................................

//we can define the number is two ways
//let x=100;
//let x=new Number(100);

let x=102       //integer value
let y=102.7     //decimal value
let z=10e2      //exponential value i.e. 10 square

console.log(x,y,z);     //we are printing side by side values


//isInteger()       we can check the variable value is integer or not
x=10;
y=1.8;
z="x";

console.log(Number.isInteger(x));   //will return true
console.log(Number.isInteger(z));   //will return false

//parseInt()  converts a string into number
s="12345";
console.log(typeof(s));                     //string
console.log(typeof(Number.parseInt(s)));    //number

//parseFloat()      for a decimal value
s="123.456";
console.log(typeof(s));
console.log(typeof(Number.parseFloat(s)));

//toString      will convert number into string
let n=1234;

console.log(typeof(n));
console.log(typeof(Number.toString(n)));