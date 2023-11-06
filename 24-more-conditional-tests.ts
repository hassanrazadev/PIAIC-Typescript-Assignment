/**
 * 24
 * More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
 * • Tests for equality and inequality with strings
 * • Tests using the lower case function
 * • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
 * • Tests using "and" and "or" operators
 * • Test whether an item is in a array
 * • Test whether an item is not in a array
 */

// Tests for equality and inequality with strings
let fruit = 'apple';

console.log("Is fruit equal to 'apple'? I predict True.");
console.log(fruit === 'apple'); // Prediction: True

console.log("Is fruit not equal to 'banana'? I predict True.");
console.log(fruit !== 'banana'); // Prediction: True

console.log("Is fruit equal to 'Apple'? I predict False (case-sensitive).");
console.log(fruit === 'Apple'); // Prediction: False

console.log("Is fruit not equal to 'apple'? I predict False.");
console.log(fruit !== 'apple'); // Prediction: False


// Tests using the lowercase function:
let text = 'Hello, World';

console.log("Is text in lowercase equal to 'hello, world'? I predict True.");
console.log(text.toLowerCase() === 'hello, world'); // Prediction: True

console.log("Is text in lowercase not equal to 'HELLO, WORLD'? I predict True (case-sensitive).");
console.log(text.toLowerCase() !== 'HELLO, WORLD'); // Prediction: True


// Numerical tests:
let number = 42;

console.log("Is number equal to 42? I predict True.");
console.log(number === 42); // Prediction: True

console.log("Is number not equal to 7? I predict True.");
console.log(number !== 7); // Prediction: True

console.log("Is number greater than 30? I predict True.");
console.log(number > 30); // Prediction: True

console.log("Is number less than 20? I predict False.");
console.log(number < 20); // Prediction: False

console.log("Is number greater than or equal to 42? I predict True.");
console.log(number >= 42); // Prediction: True

console.log("Is number less than or equal to 42? I predict True.");
console.log(number <= 42); // Prediction: True


// Tests using "and" and "or" operators:
let sunny = true;
let warm = false;

console.log("Is it sunny and warm? I predict False.");
console.log(sunny && warm); // Prediction: False

console.log("Is it sunny or warm? I predict True.");
console.log(sunny || warm); // Prediction: True


// Test whether an item is in an array:
let fruitsArray = ['apple', 'banana', 'cherry', 'date'];

console.log("Is 'banana' in the fruitsArray? I predict True.");
console.log(fruitsArray.includes('banana')); // Prediction: True

console.log("Is 'grape' in the fruitsArray? I predict False.");
console.log(fruitsArray.includes('grape')); // Prediction: False


// Test whether an item is not in an array:
let colorsArray = ['red', 'blue', 'green'];

console.log("Is 'yellow' not in the colorsArray? I predict True.");
console.log(!colorsArray.includes('yellow')); // Prediction: True

console.log("Is 'red' not in the colorsArray? I predict False.");
console.log(!colorsArray.includes('red')); // Prediction: False
