/**
 * 05
 * Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person.
 * Then compose your message and store it in a new variable called message. Print your message.
 */

let quote: string = "Three can keep a secret, if two of them are dead.";
let famousPerson: string = "Benjamin Franklin";
let message = `${famousPerson}, "${quote}"`;
console.log(message);

export {};