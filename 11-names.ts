/**
 * 11
 * Names: Store the names of a few of your friends in a array called names.
 * Print each person’s name by accessing each element in the list, one at a time.
 */


const friends: string[] = [
    "Hamza Maqsood",
    "Rahat Gill",
    "Rana Sohail",
    "Azhar Shah",
    "Zeeshan Sultan",
];

for (let i = 0; i < friends.length; i++) {
    console.log(`${friends[i]}`);
}

export {};