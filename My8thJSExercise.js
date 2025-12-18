/*Task 1: Code a function declaration
You need to code a function declaration named addTwoNums, which accepts numbers a and b and console logs a + b.

Task 2: Invoke the addTwoNums function with a number and a string
You need to invoke the addTwoNums using the following arguments: 5 and "5".

Note: Passing a number and a string will result in "55" (string concatenation) due to JavaScript's type coercion. This will be handled later when you add type-checking logic in Task 4 below.

Task 3: Update the addTwoNums function with a try...catch block
Add the try and catch blocks inside the function definition's body. For now, just make sure that the console log of a + b is inside the try block. Additionally, the catch block should catch an error named err and, inside the body of the catch block, you need to console log the err value.

Task 4: If the passed-in arguments are not numbers, throw an error
If either of the arguments passed to the addTwoNums function is not a number, you will throw an error.

Specifically, code a conditional with the following logic:

1. If the typeof the a parameter is not equal to 'number', throw a new TypeError. Inside the TypeError, include the custom error message: 'The first argument is not a number.'

2. Else if the typeof the b parameter is not equal to 'number', throw a new TypeError. Inside the TypeError, include the custom error message: 'The second argument is not a number.'

3. Else, log the sum of a + b to the console.

Once you’ve completed this task:

-> Wrap all the conditional logic inside the try block.

-> The catch block will handle any errors thrown by the conditionals and log them appropriately.

Note: So how did This Handles type coercion?

-> By explicitly checking the typeof of a and b, the function ensures only numbers are accepted.

-> Passing a string like "5" will no longer result in "55" because the error will stop the execution before the addition operation.

Task 5: Update the catch block
Inside the catch block, update the code from console.log(err) to console.log("Error!", err).

Task 6: Invoke the addTwoNums function
Invoke the addTwoNums function using 5 and "5" as arguments.

Task 7: Add another console log under the addTwoNums function invocation
Add another line of code that console logs the string "It still works".*/

//Solution:

function addTwoNums(a, b) {
    try {
        if (typeof(a) !== "number") {
            throw new TypeError("The first argument is not a number.");
        } else if (typeof(b) !== "number") {
            throw new TypeError("The second argument is not a number.");
        } else {
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error!", err);
    }
}

addTwoNums(5, "5"); //Failing test-case
addTwoNums("5", 5);  //Failing test-case
addTwoNums("5", "5"); //Failing test-case
addTwoNums(5, 5);  //Passing test-case
console.log("It still works");

/*Ouput:
Error! TypeError: The second argument is not a number.
    at addTwoNums (file:///tmp/smufq/submission.mjs:14:19)
    at file:///tmp/smufq/submission.mjs:23:1
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at async Loader.import (internal/modules/esm/loader.js:178:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
    at async handleMainPromise (internal/modules/run_main.js:59:12)
Error! TypeError: The first argument is not a number.
    at addTwoNums (file:///tmp/smufq/submission.mjs:12:19)
    at file:///tmp/smufq/submission.mjs:24:1
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at async Loader.import (internal/modules/esm/loader.js:178:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
    at async handleMainPromise (internal/modules/run_main.js:59:12)
Error! TypeError: The first argument is not a number.
    at addTwoNums (file:///tmp/smufq/submission.mjs:12:19)
    at file:///tmp/smufq/submission.mjs:25:1
    at ModuleJob.run (internal/modules/esm/module_job.js:183:25)
    at async Loader.import (internal/modules/esm/loader.js:178:24)
    at async Object.loadESM (internal/process/esm_loader.js:68:5)
    at async handleMainPromise (internal/modules/run_main.js:59:12)
10
It still works*/
