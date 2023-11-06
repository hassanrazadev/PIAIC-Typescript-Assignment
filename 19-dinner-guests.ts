/**
 * 19
 * Dinner Guests: Working with one of the programs from Exercises 14 through 18,
 * print a message indicating the number of people you are inviting to dinner.
 */

// Create a list of people to invite to dinner
let guestList: string[] = ["Zahoor", "Rahat Gill", "Rana Sohail", "Arsal"];

// Generate invitation messages for each person
guestList.forEach(person => {
    console.log(`Dear ${person},\nYou are cordially invited to dinner at my place. Please join us for a delightful evening.\n\nSincerely, Hassan`);
});

// Print the number of people you are inviting to dinner
console.log(`Number of people invited to dinner: ${guestList.length}`);
