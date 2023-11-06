/**
 * 12
 * Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
 * print a message to them. The text of each message should be the same,
 * but each message should be personalized with the person’s name.
 */

const friends: string[] = [
    "Hamza Maqsood",
    "Rahat Gill",
    "Rana Sohail",
    "Azhar Shah",
    "Zeeshan Sultan",
];

for (let i = 0; i < friends.length; i++) {
    console.log(`Hi, ${friends[i]}! What's new?`);
}

export {};