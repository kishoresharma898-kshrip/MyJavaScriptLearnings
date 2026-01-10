/*Use the for...of loop to iterate over arrays and 
objects' properties. 

Differentiate between iterating over an object’s own 
properties and its prototype properties.

Use the for...in loop to iterate through both an 
object’s own and inherited properties.

Understand how inheritance affects property visibility 
in JavaScript objects.

Write modular, reusable functions for logging properties 
and their values.
 */

// Task 1
// WRITE YOUR CODE HERE - Create the logDairy function and use a for...of loop to log each item in the dairy array
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy() {
    for (const item of dairy) {
        /* Remember, do not used dairy[item] this will 
        cause a bug and displays undefined as per the 
        length of the array defined. And 'let' or 'const' 
        can be used to declare the scope of iteration 
        variable.*/
        console.log(item);
    }
}

logDairy();

console.log(); // To give space between tasks.

// Task 2
// WRITE YOUR CODE HERE - Create the birdCan function and use a for...of loop to log bird object's own properties
const animal = {  
    canJump: true  
};  

const bird = Object.create(animal);  
bird.canFly = true;  
bird.hasFeathers = true;  

function birdCan() {
    for (let key of Object.keys(bird)) {
        /* Used template literals to format as per the 
        requirements of the assignment. And for...of 
        loop looks through the currrent object's 
        properties that it is iterating, not its 
        prototype properties unlike the for...in does.
        And 'let' or 'const' can be used to declare the 
        scope of iteration variable.*/
        console.log(`${key}: ${bird[key]}`);
    }
}

birdCan();

console.log(); // To give space between tasks.

// Task 3
// WRITE YOUR CODE HERE - Create the animalCan function and use a for...in loop to log all bird properties, including inherited ones
function animalCan() {
    for (const key in bird) {
        console.log(`${key}: ${bird[key]}`);
    }
}

animalCan();

/*Ouput:
cheese
sour cream
milk
yogurt
ice cream
milkshake

canFly: true
hasFeathers: true

canFly: true
hasFeathers: true
canJump: true
 */

/*Key Takeaways:

The for...of loop is ideal for iterating through arrays 
or iterable objects.

Use the for...of loop with Object.keys() or similar 
methods to restrict iteration to an object’s own 
properties.

The for...in loop iterates through both an object’s own 
properties and those inherited from its prototype. Be 
cautious when using this loop, as it may include unwanted 
prototype properties. 

Understand how inheritance in JavaScript affects 
property visibility and accessibility during iteration.

Encapsulating iteration logic in functions improves code 
reuse and readability.*/