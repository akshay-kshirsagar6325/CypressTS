




var string = "welcome to this javascript guide!";

//1st way
var reverseEntireSentence = reverseBySeparator(string, "");
console.log(reverseEntireSentence);


var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");
console.log(reverseEachWord);



//2nd way
function reverseBySeparator(string, separator)
{
    return string.split(separator).reverse().join(separator);
}
console.log(reverseBySeparator("welcome to this javascript guide!", " ")); 



//3rd way......same as 2nd
function reverseString(strng)
{
    return strng.split('').reverse().join('');
}

const strng = "Hello world"
const strng1 = reverseString(strng);
console.log("Reverse string:", strng1);



//4th way.....without using built-in methods
function reverseString(str) {
    let reversed = ''; // Initialize an empty string to hold the reversed result

    // Loop through the string backwards
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]; // Append each character to the reversed string
    }

    return reversed; // Return the reversed string
}

// Example usage:
const inputString = "Hello, world!";
const reversedString = reverseString(inputString);
console.log("Reversed string:", reversedString);








