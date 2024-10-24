



/////// 1st ////////////////////////////////////
function sumOfNumbers (a,b)
{
    return (a+b);
}

const add = sumOfNumbers(10,20);
console.log(add);


//////// 2nd //////////////////////////////////////
function add1(c,d)
{
    console.log(c+d);
}
add1(10,20)


///////// 3rd ///////////////////////////////////
console.log("Akshay Kshirsagar");           //printing name direct using console.log



//////////////////4th.....printing name using function
function printName (name)
{
    console.log(name);
}
printName("Akshay Kshirsagar");


/////////////////////////////////////5th
function maxNumber (arr)
{
    return Math.max(...arr);
}
let number = maxNumber ([10, 20, 30, 40, 50]);
console.log("Max NO.:", number)



///////////////////////////////6th....finding maximum number using loop
function findMaxNumber(arr) {
    let max = arr[0]; // Start with the first element

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if current element is greater
        }
    }

    return max;
}

// Example usage:
const numbers = [3, 5, 7, 2, 8, 1];
const maxNumber1 = findMaxNumber(numbers);
console.log("The maximum number is:", maxNumber1); // Should output 8




//You can create a function that filters out even numbers from an array using the filter method. Here’s how you can do it:

function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Example usage:
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(numbers1);
console.log("Even numbers:", evenNumbers);



/////////////////////////////////////////////////// title case
function toTitleCase(str) {
    return str
        .split(' ') // Split the string into an array of words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter
        .join(' '); // Join the words back into a single string
}

// Example usage:
const inputString = "hello world! this is a test string.";
const titleCasedString = toTitleCase(inputString);
console.log("Title Case:", titleCasedString);





/////////////finding max&min numbers
function findLargestAndSmallest(arr) {

    // Handle empty array case
    if (arr.length === 0) {
        return { largest: null, smallest: null }; 
    }


    let largest = arr[0]; // this assumes that the first element is the largest until proven otherwise.
    let smallest = arr[0]; // Similarly, this initializes smallest with the first element, assuming it is the smallest.

    // Loop through the array
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if current element is greater
        }
        if (arr[i] < smallest) {
            smallest = arr[i]; // Update smallest if current element is smaller
        }
    }

    return { largest, smallest }; // Return an object containing both values
}


