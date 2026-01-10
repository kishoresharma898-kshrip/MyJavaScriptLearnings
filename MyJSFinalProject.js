/*Objectives:

Understand and apply loops and conditionals to manipulate 
and display array data.

Learn to handle parameters and arguments effectively in 
function definitions.

Practice defensive coding by validating inputs.

Use logical operations to implement dynamic pricing and 
discounts.

Key Takeaways:

Arrays of objects are powerful structures for 
representing data.

Loops combined with conditionals can dynamically process 
data. 

Defensive coding ensures functions handle invalid inputs 
gracefully.

Pseudo-code and clear task breakdown simplify complex 
implementations.*/

// Dishes Data
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 },
];

// Tax Value
const tax = 1.20;

// Task 1: Implement getPrices()
function getPrices(taxBoolean) {
    // WRITE YOUR CODE HERE
    for (let item of dishData) {
        let finalPrice;
        if (taxBoolean === true) {
            finalPrice = item["price"] * tax;
        } else if (taxBoolean === false) {
            finalPrice = item["price"];
        } else {
            console.log(`You need to pass a boolean to the getPrices call!`);
            //break; //break can also be used to exit from the function.
            return;
        }
        console.log("Dish: " + item["name"], "Price: $" + finalPrice);
        //console.log(`Dish: ${item["name"]} Price: $${finalPrice}`);
    }
}

// Task 2: Implement getDiscount()
//taxBoolean = null, guests = null can also be given.
function getDiscount(taxBoolean = false, guests = 0) {
    // WRITE YOUR CODE HERE
    getPrices(taxBoolean);
    if (typeof (guests) === "number" && guests > 0 && guests < 30) {
        let discount = 0;
        if (guests < 5) {
            discount = 5;
        } else if (guests >= 5) {
            discount = 10;
        }
        console.log("Discount is: $" + discount);
        //console.log(`Discount is: $${discount}`);
    } else {
        console.log(`The second argument must be a number between 0 and 30`);
    }
}

// Call getDiscount() with sample arguments

/*In this test case the getDiscount() takes true as first 
argument which applies a tax of 20% each dish. And as the 
guests are 0 or not provided which is the second argument, 
getPrices() method applies tax when taxBoolean 
parameter is true and getDiscount() prints out an error 
"The second argument must be a number between 0 and 30".*/
console.log("This is 1st test case: ");
getDiscount(true);

console.log();

/*In this test case the getDiscount() takes false as first 
argument which applies a tax of 0%  or no tax on each 
dish. And as the guests are 0 or not provided which is 
the second argument, getPrices() method does not applies 
tax when taxBoolean parameter is false and getDiscount() 
prints out an error "The second argument must be a number 
between 0 and 30".*/
console.log("This is 2nd test case: ");
getDiscount(false);

console.log()

/*In this test case the getDiscount() does not take any 
first argument, getPrices() method logs expected error 
message when taxBoolean is not supplied "You need to pass a 
boolean to the getPrices call!" and getDiscount() prints 
out an error as the guests are 5 which is the second 
argument,"The second argument must be a number between 
0 and 30".*/
console.log("This is 3rd test case: ");
getDiscount(2);
//Works correctly when taxBoolean = null, guests = null are given.
//getDiscount();

console.log();

/*In this test case the getDiscount() takes true as first 
argument which applies a tax of 20% on each dish. And as 
the guests are 2 (<5) which is the second argument it 
applies a discount of $5 and displays it on the receipt.*/
console.log("This is 4th test case: ");
getDiscount(true, 2);

console.log(); // Gap between two test cases.

/*In this test case the getDiscount() takes true as first 
argument which applies a tax of 20% on each dish. And as 
the guests are 10 (>5) which is the second argument it 
applies a discount of $10 and displays it on the receipt.*/
console.log("This is 5th test case: ");
getDiscount(true, 10);

console.log();

/*In this test case the getDiscount() takes false as first 
argument which applies a tax of 0% or no tax on each dish. 
And as the guests are 3 (<5) which is the second argument it applies 
a discount of $5 and displays it on the receipt.*/
console.log("This is 6th test case: ");
getDiscount(false, 3);

console.log();

/*In this test case the getDiscount() takes false as first 
argument which applies no tax on each dish. And as 
the guests are 10(>5) which is the second argument it 
applies a discount of $10 and displays it on the receipt.*/
console.log("This is 7th test case: ");
getDiscount(false, 10);

console.log();

/*In this test case the getDiscount() takes true as first 
argument which applies 20% tax on each dish. And as 
the guests are 45 which is the second argument 
getDiscount() method logs expected error message when 
guests count not in range "The second argument must be a
number between 0 and 30".*/
console.log("This is 8th test case: ");
getDiscount(true, 45);

/*Output:
This is 1st test case: 
Dish: Italian pasta Price: $11.46
Dish: Rice with veggies Price: $10.38
Dish: Chicken with potatoes Price: $18.66
Dish: Vegetarian Pizza Price: $7.74
The second argument must be a number between 0 and 30

This is 2nd test case: 
Dish: Italian pasta Price: $9.55
Dish: Rice with veggies Price: $8.65
Dish: Chicken with potatoes Price: $15.55
Dish: Vegetarian Pizza Price: $6.45
The second argument must be a number between 0 and 30

This is 3rd test case: 
You need to pass a boolean to the getPrices call!
The second argument must be a number between 0 and 30

This is 4th test case: 
Dish: Italian pasta Price: $11.46
Dish: Rice with veggies Price: $10.38
Dish: Chicken with potatoes Price: $18.66
Dish: Vegetarian Pizza Price: $7.74
Discount is: $5

This is 5th test case: 
Dish: Italian pasta Price: $11.46
Dish: Rice with veggies Price: $10.38
Dish: Chicken with potatoes Price: $18.66
Dish: Vegetarian Pizza Price: $7.74
Discount is: $10

This is 6th test case: 
Dish: Italian pasta Price: $9.55
Dish: Rice with veggies Price: $8.65
Dish: Chicken with potatoes Price: $15.55
Dish: Vegetarian Pizza Price: $6.45
Discount is: $5

This is 7th test case: 
Dish: Italian pasta Price: $9.55
Dish: Rice with veggies Price: $8.65
Dish: Chicken with potatoes Price: $15.55
Dish: Vegetarian Pizza Price: $6.45
Discount is: $10

This is 8th test case: 
Dish: Italian pasta Price: $11.46
Dish: Rice with veggies Price: $10.38
Dish: Chicken with potatoes Price: $18.66
Dish: Vegetarian Pizza Price: $7.74
The second argument must be a number between 0 and 30*/