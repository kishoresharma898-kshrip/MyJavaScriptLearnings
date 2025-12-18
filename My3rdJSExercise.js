/*Task 1: Complete the following steps to create: Are You Old Enough? 

1. Declare a variable age using the var keyword and set it to the number 10.

2. Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension". 
(We will be using console.log throughout the code to display output in the console, helping to show the results of conditions and track the program's behavior during execution.)

3. Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".

4. Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, type "console.log" and then "You get an allowance".

5. Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical".

Try adjusting the age and executing the program to see how it will affect the output.

Note: The code in the Are You Old Enough?  example does not check if 'age' is a valid number. To prevent errors during runtime in real-world applications, it's important to verify that an input is of the expected
type (for instance a number). Error checking is covered in another lesson.*/

//Task 1: Solution

//Exercise-3.1: Are You Old Enough?
//Comment or Uncomment these lins to execute.
var age = 10;
if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age >= 18 && age < 65) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}

//Ouput: You get an allowance

//Exercise-3.2: Are You Old Enough?(Better version focuses on type while comparison)
//You can use the typeof operator and additional checks for strings and other data types
var age = "18";
if (typeof(age) === "number") {
    if (age >= 65) {
        console.log("You get your income from your pension");
    } else if (age >= 18 && age < 65) {
        console.log("Each month you get a salary");
    } else {
        console.log("You get an allowance");
    }
} else {
    console.log("The value of the age variable is not numerical");
}

//Ouput: The value of the age variable is not numerical

/*Task 2: Code the days of the week program as a switch statement
1. Define a new variable, name it day, and set its value to "Sunday".

2. Start coding a switch statement, passing the day variable as the expression to evaluate.

3. Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), 
and add a break; on the line below.

4. At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

5. Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.

Note: In the days of the week code example the 'else' block handles unexpected cases. However, it only applies if no conditions match.  It assumes a valid 'age' input. Proper validation of input types, like 
ensuring 'age' is a number, is explored in other lessons.

Tips:
-> If you need to make sure that multiple conditions are true in an if statement, you can do so using the && operator

-> In JavaScript, the correct syntax of the "greater than or equal to" operator is: >=.

-> Don't forget to add a break at the very end of each case in a switch statement.

Note: You can find solutions in a separate reading (following this one)*/

//Task 2: Solution

//Exercise-3.3: Days of the week
var day = "Sunday";
switch(day) {
    case "Monday":
        console.log('Check for any tickets assigned on the dashboard.');
        break;
    case "Tuesday":
        console.log('Figure out the solutions for the tickets one-by-one.');
        break;
    case "Wednesday":
        console.log('Take one at a time and work on all high priority tickets first.');
        break;
    case "Thursday":
        console.log('Try closing the high priority tickets on time and check the dashboard.');
        break;
    case "Friday":
        console.log('Update the statuses on worked tickets');
        break;
    case "Saturday":
        console.log('Close the tickets after checking with the seniors/clients.');
        break;
    case "Sunday":
        console.log('Take a break');
        break;
    default:
        console.log('There is no such day');
}

//Ouput: Take a break
