//Data Structures Examples and built-in fucntions.
//Note: Uncomment the code which you want test and understand.
//Array as a Data Structure.
/*The forEach function: forEach() method accepts a function that will work on each array item. 
That function's first parameter is the current array item itself, and the second (optional) 
parameter is the index. Very often, the function that the forEach() method needs to use is passed 
in directly into the method call(also called as call-back fucntion).*/

const fruits = ['kiwi','mango','apple','pear'];
console.log("The forEach() function on array of Fruits:");
//With traditional fucntion as callback.
// fruits.forEach(function(fruit, index) {
//     console.log(`${index + 1}. ${fruit}`);
// });

//With arrow fucntion as callback. Efficient and more reable format of using a callback.
fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`);
});

console.log();

const veggies = ['onion', 'garlic', 'potato'];
console.log("The forEach() function on array of Veggies(Vegetables):");
//With traditional fucntion as callback.
// veggies.forEach( function(veggie, index) {
//     console.log(`${index + 1}. ${veggie}`);
// });

//With arrow fucntion as callback. Efficient and more reable format of using a callback..
veggies.forEach((veggie, index) => {
    console.log(`${index + 1}. ${veggie}`);
});

console.log();

/*The filter() fucntion: It filters your arrays based on a specific test. Those array items that 
pass the test are returned.*/
console.log("The filter() function on array of Numbers:");
let numbers = [10, 20, 30, 40, 50];
//With traditional fucntion as callback.
// let result = [];
// numbers.filter( function(num) {
//     if (num > 20) {
//         result.push(num);
//     }
// });
// console.log(result);

//With arrow fucntion as callback. But is not so efficient as it uses more syntax.
// const filteredNums = [];
// numbers.filter((num) => {
//     if (num > 20) {
//         filteredNums.push(num);
//     }
// });
// console.log(filteredNums);

//With arrow fucntion as callback. Most efficient as it uses simple and readable syntax.
const filteredNums = numbers.filter((num) => {
    return num > 20;
});
console.log(filteredNums);

console.log();

/*The map() method: This method is used to map each array item over to another array's item, based 
on whatever work is performed inside the function that is passed-in to the map as a parameter. */
console.log("The map() function on array of Numbers:");
//With traditional fucntion as callback.
// const mappedNums = numbers.map( function(num) {
//     return num / 10;
// });

//With arrow fucntion as callback. But is not so efficient as it uses more syntax.
// const mappedNums = [];
// numbers.map((num) => {
//     if (num / 10 !== 0) {
//         mappedNums.push(num / 10);
//     }
// });

//With arrow fucntion as callback. Most efficient as it uses simple and readable syntax.
const mappedNums = numbers.map((num) => {
    return num / 10;
});
console.log(mappedNums);

console.log();

//Object as Data Structure. 
/*The example below demonstrates how to use the object data structure to complete a specific task. 
This task is to convert an object to an array:*/
console.log("Object as Data Structure(Converting an object into an array):");
const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}

const droneKeys = Object.keys(drone);

//With traditional fucntion as callback.
// droneKeys.forEach( function(key) {
//     result.push([key, drone[key]]);
// });

////With arrow fucntion as callback. Efficient and more reable format of using a callback.
droneKeys.forEach((key) => {
    result.push([key, drone[key]]);
});
console.log(result);

/*Although this is possible and works, having to do something like this might mean that you haven't 
chosen the correct data structure to work with in your code.

On the flip side, sometimes you don't get to pick the data structure you're working with. 
Perhaps that data comes in from a third-party data provider and all you can do is code your program 
so that it consumes it. You'll learn more about the interchange of data on the web when you learn 
about JSON (JavaScript Object Notation).*/

console.log();
//Map as Data Structure.
/*A map can feel very similar to an object in JS.

However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage.
To make a new Map, you can use the Map constructor: new Map();

To add elements into a Map you can use set() method which takes arguments and adds/appends them into the map created.*/

console.log("Map as Data Structure:");
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
console.log();
//To get a specific value, you need to use the get() method. For example: 
console.log("Extracting/accessing map elements(indexing in map also starts from 0 which similar in arrays and strings):");
console.log(bestBoxers.get(1)); // 'The Champion'

console.log();

//Set as Data Strucuture.
/*A set is a collection of unique values.

To build a new set, you can use the Set constructor: new Set();

The Set constructor can, for example, accept an array.

This means that we can use it to quickly filter an array for unique members.

To add elements into a Set you can use add() method which takes arguments and adds/appends them into the map. Or on a whole you can also give the same arguments into the constructor of the Set while you are creating.*/

console.log("Set as Data Structure:");
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits); // This will filters out the duplicates in the input array element

// This will adds up the whole array as an element/object and does not filters out the dups.
//const uniqueFruits = new Set();
//uniqueFruits.add(repetitiveFruits);

console.log(uniqueFruits);