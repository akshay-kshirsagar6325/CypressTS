

// To remove all vowels from a string in JavaScript, call the replace() method on the string with this regular expression: /[aeiou]/gi , i.e., 
// str. replace(/[aeiou]/gi, '') . replace() will return a new string where all the vowels in the original string have been replaced with an empty string.


const str = 'coding beauty';
const noVowels = str.replace(/[aeiou]/gi, '');
console.log(noVowels); // cdng bty



//extracting vowels

// You can extract vowels from a string in JavaScript by using a regular expression along with the match() method, which finds all instances of a pattern in the
// string. The regular expression pattern for vowels would be [aeiouAEIOU],which includes both lowercase and uppercase vowels.



function extractVowels(string) {
    return string.match(/[aeiouAEIOU]/g);
}

var str1 = "welcome to this javascript guide!";
var vowels = extractVowels(str1);

console.log(vowels);  // Output: [ 'e', 'o', 'e', 'o', 'i', 'a', 'a', 'i', 'u', 'i', 'e' ]
