/**
 * 22
 * Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen.
 * Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
 */

const friends: string[] = [
    "Hamza Maqsood",
    "Rahat Gill",
    "Rana Sohail",
    "Azhar Shah",
    "Zeeshan Sultan",
];

console.log(friends[5]); // index error
// handle error

if (friends.length > 5) {
    console.log(friends[5]);
} else {
    console.log("Index error, please use correct error"); // index error
}

export {};