/**
 * 06
 * Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name.
 * Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
 * so the whitespace around the name is displayed. Then print the name after striping the white spaces.
 */

// Store a name with whitespace
let nameWithWhitespace = "\t\n   Hassan Raza   \t\n";

// Print the name with whitespace
console.log("Name with whitespace:");
console.log(nameWithWhitespace);

// Strip the whitespace and print the cleaned name
let strippedName = nameWithWhitespace.trim();
console.log("\nName after stripping whitespace:");
console.log(strippedName);

export {};