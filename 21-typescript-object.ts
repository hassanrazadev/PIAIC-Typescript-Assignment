/**
 * 21
 * They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
 */

let mountains: { name: string; height: number; location: string }[] = [
    {
        name: "Mount Everest",
        height: 8848,
        location: "Nepal",
    }, {
        name: "K2",
        height: 8611,
        location: "Pakistan",
    }, {
        name: "Mount Kilimanjaro",
        height: 5895,
        location: "Tanzania",
    }, {
        name: "Denali",
        height: 6190,
        location: "United States",
    },
];

console.log("List of Mountains:");
mountains.forEach(mountain => {
    console.log(`Mountain: ${mountain.name}`);
    console.log(`Height: ${mountain.height} meters`);
    console.log(`Location: ${mountain.location}`);
    console.log("----------");
});

export {};