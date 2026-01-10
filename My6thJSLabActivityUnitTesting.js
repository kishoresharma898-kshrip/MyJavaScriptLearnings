/*Task 1: Add Jest as a Development Dependency  

Objective: Learn how to install Jest using npm and configure it 
as a development dependency in a JavaScript project. 

Steps:
Step 1: Navigate to Terminal > New Terminal and execute the 
"npm install jest --save-dev" command to install Jest.

Step 2: Verify the installation:

Open the package.json file present under the Jest-Testing folder. 

Confirm the presence of the following entry: 
"devDependencies": {
    "jest": "^29.7.0"
}

Task 2: Update the test Script 

Objective: Understand how to modify the scripts section of 
package.json to include a Jest test runner. 

Steps:
Step 1: In the package.json file, locate the "scripts" section 
and update the "test" entry as follows: 

"scripts": {
    "test": "jest"
} 

Task 3: Code the timesTwo() Function in a js file naming it as 
timesTwo.js.*/

//In timesTwo.js

// Task 1: Code the timesTwo function declaration
/* WRITE YOUR CODE HERE - Create a function named timesTwo that 
takes a number and returns the value multiplied by 2.*/
function timesTwo(num) {
    return num * 2;
}

// Task 2: Export the timesTwo function as a module
/* WRITE YOUR CODE HERE - Use module.exports to export the 
timesTwo() function. */
module.exports = timesTwo;

/*Task 4: Write the First Test by creating a file naming 
timesTwo.test.js in the same folder where timesTwo.js and the 
package.json are present.*/

//In timesTwo.test.js

const { default: TestRunner } = require("jest-runner");
const timesTwo = require('./timesTwo');

// Write the first test
// WRITE YOUR CODE HERE - Use the test() function to write a test for timesTwo with the description "returns the number times 2"
// WRITE YOUR CODE HERE - Use expect() and toBe() to verify timesTwo(10) equals 20

/*The test function takes two arguments one is the string
 which describes what the test() is going to do and the 
 second is a function which outputs the result of the 
 test using expect() and toBe() functions.
 
 The expect() takes the exported function timesTwo() as 
 its parameter/argument and toBe() takes the expected 
 result and compares it with the output of function 
 parsed/stated in the expect(). In this case the 
 timesTwo() function.*/

test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20);
});

/*Expected Output: */

/*Key Takeaways:

Unit tests help validate the behavior of small, isolated parts 
of a codebase. 

Jest provides an easy-to-use API for writing and running tests.

Use npm install --save-dev to add packages needed during 
development, like Jest.*/