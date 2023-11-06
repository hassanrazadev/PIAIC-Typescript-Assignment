/**
 * 42
 * Great Magicians: Start with a copy of your program from Exercise 39/41. Write a function called make_great()
 * that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 * Call show_magicians() to see that the list has actually been modified.
 */

// Create an array of magician's names
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller", "David Blaine"];

// Define the function to show magicians
function showMagicians(magicianList: string[]): void {
    magicianList.forEach(name => {
        console.log(name);
    });
}

// Define the function to make magicians great
function makeGreat(magicianList: string[]) {
    for (let i = 0; i < magicianList.length; i++) {
        magicianList[i] = magicianList[i] + " is great.";
    }
}

makeGreat(magicians);
showMagicians(magicians);

export {};