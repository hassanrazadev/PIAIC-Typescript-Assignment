/**
 * 44
 * Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 * The function should have one parameter that collects as many items as the function call provides,
 * and it should print a summary of the sandwich that is being ordered. Call the function three times,
 * using a different number of arguments each time.
 */

function makeSandwich(...items: string[]): void {
    console.log("Sandwich Order Summary:");
    if (items.length > 0) {
        console.log("You ordered a sandwich with the following items:");
        items.forEach(item => {
            console.log(`- ${item}`);
        });
    } else {
        console.log("Oops, it looks like you didn't specify any items for your sandwich.");
    }
}

// Call the function three times with different numbers of arguments
makeSandwich("Turkey", "Cheese", "Lettuce");
makeSandwich("Ham", "Swiss Cheese");
makeSandwich();

export {};