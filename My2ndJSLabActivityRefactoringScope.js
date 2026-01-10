// This is the initial code using `var` with some issues to fix.

// Your task:
// 1. Replace `var` declarations with `let` or `const` as appropriate.
// 2. Resolve issues caused by hoisting, redeclaration, and scoping.
// 3. Ensure the program works correctly after refactoring.

// var x = 5; // Variable declaration and initialization
// var x = 10; // Redeclaration, works with var but not allowed with let

// Using const for a value that doesn’t change

const x = 10; 
console.log(x);

let a = 20; // Declare before use
console.log(a); // Hoisting example: variable is used before declaration
//var a = 20; // Undefined with var, error with let/const. Uncomment this line to see defect.

if (true) {
    //var z = 30; //Used to be var later to changed to let. Uncomment this line to see defect.
    let z = 30; // Variable declared with var is accessible outside block. Comment this line to see defect.
    console.log(z); // z is accessible only inside the `if` statement
}
//console.log(z); // Should cause a scoping issue when switched to let/const. Uncomment this line to see defect.

//var b = 40; //Used to be var later to changed to let. Uncomment this line to see defect.
let b = 40; // Variable that changes value. Comment this line to see defect.
b = 50; // Should be let, as it changes value
console.log(b);

//var PI = 3.14; //Used to be var later to changed to const. Uncomment this line to see defect.
const PI = 3.14; // Declared as a variable but should ideally be a constant. Thus changed the scope to const. Comment this line to see defect.
console.log(PI);
//PI = 3.14159; // This should throw an error when changed to const. Uncomment this line to see defect.