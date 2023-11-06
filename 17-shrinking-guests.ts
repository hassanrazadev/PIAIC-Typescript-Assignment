/**
 * 17
 * Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
 * • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
 * • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
 * • Print a message to each of the two people still on your list, letting them know they’re still invited.
 * • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
 */

let guestList: string[] = ["Zahoor", "Rahat Gill", "Rana Sohail", "Arsal"];

guestList.forEach( person => {
    console.log("Dear " + person + ",\nYou are cordially invited to dinner at my place. Please join us for a delightful evening.\n\nSincerely, Hassan");
});

// Arsal will not be there, replace it
console.log(`${guestList[3]} can't make it to dinner.`);
guestList.splice(3, 1, "Adil");

guestList.forEach( person => {
    console.log("Dear " + person + ",\nYou are cordially invited to dinner at my place. Please join us for a delightful evening.\n\nSincerely, Hassan");
});

// Inform people about the bigger dinner table
console.log("Great news! We found a bigger dinner table.");
// add new guest to start
guestList.unshift("Majid");
// add new guest to middle
guestList.splice(Math.floor(guestList.length / 2), 0, "Sufyan");
// add new guest to end
guestList.push("Hamza");

guestList.forEach( person => {
    console.log("Dear " + person + ",\nYou are cordially invited to dinner at my place. Please join us for a delightful evening.\n\nSincerely, Hassan");
});

// ==================== FROM 16 ================== //

// Inform people about the shrinking dinner table
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests one by one until only two names remain
while (guestList.length > 2) {
    const removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner this time.`);
}

guestList.forEach(person => {
    console.log(`Dear ${person}, you're still invited to dinner at my place. See you there!`);
});

guestList.splice(0, guestList.length);

console.log("Guest list is now empty:", guestList);

export {};