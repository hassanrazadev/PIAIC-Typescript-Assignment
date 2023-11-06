/**
 * 41
 * Magicians: Make a array of magician’s names. Pass the array to a function called showMagicians(),
 * which prints the name of each magician in the array.
 */

// Create an array of magician's names
let magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller", "David Blaine"];

// Define the function to show magicians
function showMagicians(magicianList: string[]): void {
    magicianList.forEach(name => {
        console.log(name);
    });
}

// Call the showMagicians function to print the names of magicians
showMagicians(magicians);

export {};

export {};