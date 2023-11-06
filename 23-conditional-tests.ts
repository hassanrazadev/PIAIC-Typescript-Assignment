/**
 * 23
 * Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
 * let car = 'subaru';
 * console.log("Is car == 'subaru'? I predict True.")
 * console.log(car == 'subaru')
 * • Look closely at your results, and make sure you understand why each line evaluates to True or False.
 * • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 */

let car = 'subaru';
let age = 25;
let isSunny = true;
let favoriteColor = 'blue';
let userLoggedIn = false;

console.log("Is car == 'subaru'? I predict True.");
console.log(car === 'subaru'); // Prediction: True

console.log("Is age < 18? I predict False.");
console.log(age < 18); // Prediction: False

console.log("Is isSunny and userLoggedIn both True? I predict False.");
console.log(isSunny && userLoggedIn); // Prediction: False

console.log("Is age >= 21 or favoriteColor == 'red'? I predict True.");
console.log(age >= 21 || favoriteColor === 'red'); // Prediction: True

console.log("Is car != 'honda'? I predict True.");
console.log(car !== 'honda'); // Prediction: True

console.log("Is favoriteColor != 'green'? I predict True.");
console.log(favoriteColor !== 'green'); // Prediction: True

console.log("Is age > 25? I predict False.");
console.log(age > 25); // Prediction: False

console.log("Is isSunny or favoriteColor == 'blue'? I predict True.");
console.log(isSunny || favoriteColor === 'blue'); // Prediction: True

console.log("Is car == 'SUBARU'? I predict False (case-sensitive).");
console.log(car === 'SUBARU'); // Prediction: False

console.log("Is userLoggedIn == false? I predict True (userLoggedIn is false).");
console.log(userLoggedIn === false); // Prediction: True

export {};