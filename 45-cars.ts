/**
 * 45
 * Cars: Write a function that stores information about a car in a Object. The function should always receive
 * a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
 * Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
 * Print the Object that’s returned to make sure all the information was stored correctly.
 */

function createCar(manufacturer: string, modelName: string, ...keywords: { [key: string]: any }[]): any {
    let carInfo: { manufacturer: string; modelName: string } = {
        manufacturer: manufacturer,
        modelName: modelName,
    };

    for (const keyword of keywords) {
        carInfo = { ...carInfo, ...keyword };
    }

    return carInfo;
}

// Call the function with the required information and additional key-value pairs
let car = createCar("Toyota", "Camry", {color: "Silver", year: 2023});

// Print the object to verify the stored information
console.log("Car Information:", car);
