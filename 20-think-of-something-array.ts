/**
 * 20
 * Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries,
 * cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
 */

// Create an array of mountain names
let mountainList: string[] = [];

mountainList.push("Mount Everest");
mountainList.push("K2");
mountainList.push("Mount Kilimanjaro");
mountainList.push("Denali");
// Print the array of mountain names
console.log("List of Mountains:");
mountainList.forEach(mountain => {
    console.log(mountain);
});
