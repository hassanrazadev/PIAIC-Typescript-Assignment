/**
 * 16
 * More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
 * • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
 * • Add one new guest to the beginning of your array.
 * • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
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

// ==================== FROM 15 ================== //

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

export {};