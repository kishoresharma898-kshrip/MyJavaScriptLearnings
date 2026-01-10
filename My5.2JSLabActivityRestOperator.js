// 5.2/Part 2: Handle Unknown Function Arguments
/*This task uses spread operator. 

The rest operator (...args) in JavaScript allows you to 
gather all remaining arguments of a function into a 
single array making iteration and manipulation 
straightforward. 

This is particularly useful when working with functions 
that accept an unknown or variable number of arguments.

Used in destructuring or collecting function arguments.*/

function unknownArgs(...args) {
    // Your code here
    // Traditional for loop construct.
    // for (let i = 0; i < args.length; i++) {
    //     console.log(args[i]);
    // }

    /*forEach() function construct which uses callback 
    for implementation of tasks/requirement.*/
    args.forEach((item) => { 
        console.log(item);
    });
}

console.log("Prints all the numbers which are given as the arugments to the function.");
unknownArgs(1, 2, 3, 4, 5);
console.log();
console.log("Prints all the small letters which are given as the arugments to the function.");
unknownArgs("a", "b", "c");

/*Output:
Prints all the numbers which are given as the arugments to the function.
1
2
3
4
5

Prints all the small letters which are given as the arugments to the function.
a
b
c
 */