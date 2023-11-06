/**
 * 29
 * Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
 * • Make a array of your three favorite fruits and call it favorite_fruits.
 * • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 */

let favoriteFruits: string[] = [
    "Bananas",
    "Mangoes",
    "Oranges"
];

if (favoriteFruits.includes("Guava")) { console.log("I really like Guava"); }
if (favoriteFruits.includes("Apple")) { console.log("I really like Apple"); }
if (favoriteFruits.includes("Mangoes")) { console.log("I really like Mangoes"); }
if (favoriteFruits.includes("Strawberries")) { console.log("I really like Strawberries"); }
if (favoriteFruits.includes("Oranges")) { console.log("I really like Oranges"); }

export {};