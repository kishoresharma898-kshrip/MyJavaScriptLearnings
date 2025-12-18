/*Tasks to complete
1. Create a new empty array literal and assign it to the variable clothes.

2. Add 5 of your favorite items of clothing as strings using the push() method.

3. Remove the fifth piece of clothing from the array using the pop() method.

4. Add a new piece of clothing using the push() method.

5. Use console.log to show the third item from the clothes array in the console.

6. Create a new empty object literal and assign it to the variable favCar.

7. Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.

8. Using the dot notation, assign a convertible property to the favCar object and give it a boolean value of your choice.

9. Use the console to log the entire favCar object.

Note:  In Step2, the push() method adds one or more elements to the end of an array and returns the new length of the array. For example: 

let arr = [1, 2];
arr.push(3); // Adds 3 to the end
console.log(arr); // [1, 2, 3]

Tips
-> Remember to use the object literal syntax: {}.

-> Remember to use the array literal syntax: [].*/

var clothes = [];
clothes.push("Shirt");
clothes.push("Denim Jacket");
clothes.push("Jeans");
clothes.push("Cargo Jeans");
clothes.push("Chinos");
console.log(clothes); //['Shirt', 'Denim Jacket', 'Jeans', 'Cargo Jeans', 'Chinos']
clothes.pop();
clothes.push("T-shirts");
console.log(clothes); //['Shirt', 'Denim Jacket', 'Jeans', 'Cargo Jeans', 'T-shirts']
console.log(clothes[2]); //'Jeans'
var favCar = {};
favCar.color = "Blue";
favCar.convertible = false;
console.log(favCar);  //{color: 'Blue', convertible: false}

/*Ouput:
[ 'Shirt', 'Denim Jacket', 'Jeans', 'Cargo Jeans', 'Chinos' ]
[ 'Shirt', 'Denim Jacket', 'Jeans', 'Cargo Jeans', 'T-shirts' ]
Jeans
{ color: 'Blue', convertible: false }*/
