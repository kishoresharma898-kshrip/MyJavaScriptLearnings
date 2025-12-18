/*Task 1
Write a "for" loop that will perform exactly the same repetitive code as this:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')*/

//Task 1: Solution

for (var i = 1; i <= 5; i++) {
    console.log(i);
}
console.log('Counting completed!');

/*Ouput:
1
2
3
4
5
Counting completed!*/

/*Task 2 
Write a "for" loop that will perform exactly the same repetitive code as this:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')*/

//Task 2: Solution

for (var i = 5; i > 0; i--) {
    console.log(i);
}
console.log('Countdown finished!');

/*Ouput:
5
4
3
2
1
Countdown finished!*/

/*Task 3
Write a "while" loop that will perform exactly the same repetitive code as this:// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log('Counting completed!')
Note: Name your increment variable i(i.e., counter). Update the variable in the while loop using i++i.e., counter++).*/

//Task 3: Solution:

var counter = 1;
while (counter <= 5) {
    console.log(counter);
    counter++;
}
console.log('Counting completed!');

/*Ouput:
1
2
3
4
5
Counting completed!*/

/*Task 4
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
Note: In the while loop, decrement the value of i(i.e., counter) using: i = i - 1. Alternatively, you can also use i-- as used in the previous example. Both versions result in the same outcome. */

//Task 4: Solution

var counter = 5;
while (counter > 0) {
    console.log(counter)
    counter = counter - 1;
}
console.log('Countdown finished!');

/*Ouput:
5
4
3
2
1
Countdown finished!*/

/*Task 5
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)*/

//Task 5: Solution

var year = 2018;
while (year <= 2022){
    console.log(year);
    year = year + 1;
}

/*Ouput:
2018
2019
2020
2021
2022*/
