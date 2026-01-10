// 5.1/Part 1: Separate Array Elements
/*This task uses spread operator. 

The spread operator is used to expand elements of an array, object, or iterable 
into individual items. 

It’s represented by three dots (...). For arrays, it 
allows us to easily extract or spread values, making 
operations like splitting arrays or merging arrays 
simpler. 

Used for concatenation, copying, or passing arguments.

It enhances code readability and eliminates the need for 
manual slicing.*/

const topSixRestaurants = ["Chick-fil-A", "In-N-Out", "Chipotle", "McDonald's", "Taco Bell", "KFC"];
const [first, second, third, ...remaining] = topSixRestaurants;

console.log(`First restaurant: ${first}`);
console.log(`Second restaurant: ${second}`);
console.log(`Third restaurant: ${third}`);
console.log(`Remaining restaurants: ${remaining}`);

/*Ouput:
First restaurant: Chick-fil-A
Second restaurant: In-N-Out
Third restaurant: Chipotle
Remaining restaurants: McDonald's,Taco Bell,KFC
 */