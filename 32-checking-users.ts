/**
 * 32
 * Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
 * • Make a list of five or more usernames called current_users.
 * • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
 * • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
 */

let currentUsers: string[] = [
    "admin",
    "awais",
    "asad",
    "faraz",
    "majid",
    "yazdan"
],
newUsers: string[] = [
    "umar",
    "Asad",
    "Ahsan",
    "Majid",
    "Khuram"
];
// function to find index
let indexOf = (arr: string[], q: string) => arr.findIndex(item => q.toLowerCase() === item.toLowerCase());

newUsers.forEach(user => {
    if (indexOf(currentUsers, user) >= 0) {
        console.log(`${user} already taken, please try another one`);
    } else {
        console.log(`${user} is available`);
    }
});

export {};