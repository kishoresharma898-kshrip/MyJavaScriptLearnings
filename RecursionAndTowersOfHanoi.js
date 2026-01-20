/*Understnading recurrsion using towers of hanoi:

Rules:

1. Only one disk can be moved at a time 

2. Only the upper disk of any of the towers can be moved 

3. Larger disks cannot be placed over smaller disks

Understanding codeblocks:

You begin with three towers or poles - source, destination, and helper. In 
the first section of code, you will cover the base condition of recursion. 
Base conditions serve primarily to complete the execution and ensure the 
recursion does not run into an infinite loop.

The second section of code deals with the actual call to the recursion 
function within itself.

The third section consists of the driver code for the initial call, 
consisting of the actual tower names that you pass as arguments to the 
function, along with the number of disks. Driver code is a generic term 
used to denote the section of code that gives the actual call to the 
function or class.*/

// Recursive function for Tower of Hanoi:
console.log("Towers of Hanoi:")
function hanoi(disks, source, helper, destination) {
    // Base Condition
    if (disks == 1) {
        console.log(`Disk ${disks} moves from tower ${source} to tower ${destination}.`)
        return
    }

    // Recursive calls in which function calls itself.
    hanoi(disks - 1, source, destination, helper)
    console.log(`Disk ${disks} moves from tower ${source} to tower ${destination}.`)
    hanoi(disks - 1, helper, source, destination)
}
// Driver code: Initializing and calling the function
disks = prompt('Number of disks to be displaced: ')
/*
Tower names passed as arguments:
Source: A
Helper: B
Destination: C
*/
// Actual function call
hanoi(disks, 'A', 'B', 'C')

console.log()

// Factorial using recurrsion and ternary operator in python:
console.log("Factorial as an example of recurrsion:")
function factorial(n = 0) {
    let fact = null
    if (typeof(n) === "number") { // Invalid input condition
        // fact = (n < 0) ? 0 : (n == 0 || n == 1) ? 1 : n * factorial(n - 1) // Using ternary operator

        // Using if-else ladder
        if (n < 0) { // Invalid input condition
            fact = 0
        }
        else if (n == 0 || n == 1) { // Base condition
            fact = 1
        }
        else {
            fact = n * factorial(n - 1) // Recurrsion condition
        }
    }
    else{
        fact = -1
    }
        
    return fact
}
console.log(factorial("5")) // -1
console.log(factorial(-5)) // 0
console.log(factorial(1)) // 1
console.log(factorial(0)) // 1
console.log(factorial(5)) // 120
console.log(factorial()) // 1 default parameter case

console.log()

console.log("Reverse a string: ")
function string_reversal(str) {
    // Using for loop:
    // let result_string = ''
    // for (let i = str.length - 1; i > -1; i--) {
    //     result_string += str[i]
    // }
    // return result_string

    // Using while loop:
    // let result_string = ""
    // let i = str.length - 1
    // while (i > -1) {
    //     result_string += str[i]
    //     i--
    // }
    // return result_string

    // Using recursion and substring
    if (str.length == 0) {
        return str
    } else {
        return string_reversal(str.substring(1)) + str[0]
    }
}

input_string = "malayalam"
console.log(string_reversal(input_string) === input_string)
console.log(string_reversal(input_string))