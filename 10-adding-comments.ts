/**
 * 10
 * Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
 * If you don’t have anything specific to write because your programs are too simple at this point,
 * just add your name and the current date at the top of each program file.
 * Then write one sentence describing what the program does.
 */

let name: string = "HaSSaN RaZa";

const titleCase = name.split(" ") // convert string to array
    .map((word: string) => {
        return (
            word[0].toUpperCase() + // make first character to upper case
            word.substring(1).toLowerCase() // remove first character from word and convert remaining to lowercase
        )
    })
    .join(" "); // convert array back to string

// the use of template literal (`)
console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”"`);

export {};