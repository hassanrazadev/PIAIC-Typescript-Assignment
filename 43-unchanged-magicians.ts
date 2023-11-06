/**
 * 43
 * Unchanged Magicians: Start with your work from Exercise 40/42. Call the function make_great()
 * with a copy of the array of magicians’ names. Because the original array will be unchanged,
 * return the new array and store it in a separate array. Call show_magicians() with each array to
 * show that you have one array of the original names and one array with the Great added to each magician’s name.
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
    let copyOfArray = [];

    for (let i = 0; i < magicianList.length; i++) {
        copyOfArray.push( magicianList[i] + " is great.");
    }

    return copyOfArray;
}

let copyOfMagicians = makeGreat(magicians);
console.log('Great magicians.......')
showMagicians(copyOfMagicians);
console.log('Original magicians.......')
showMagicians(magicians);

export {};