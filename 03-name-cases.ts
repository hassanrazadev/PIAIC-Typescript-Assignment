/**
 * 03
 * Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
 */


let name: string = "HaSSaN RaZa";

// lowercase
console.log(`Name in lowercase: ${name.toLowerCase()}`);
// uppercase
console.log(`Name in uppercase: ${name.toUpperCase()}`);
// title case
const titleCase = name.split(" ") // convert string to array
    .map((word: string) => {
        return (
            word[0].toUpperCase() + // make first character to upper case
            word.substring(1).toLowerCase() // remove first character from word and convert remaining to lowercase
        )
    })
    .join(" "); // convert array back to string
console.log(`Name in title case: ${titleCase}`);


export {};