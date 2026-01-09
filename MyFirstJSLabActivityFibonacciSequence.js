//Example for Fibonacci series 0, 1, 1, 2, 3, 5, 8, 13, 21,...
/*
Base case:

The base case is the condition in a recursive function 
that stops the recursion. It represents the simplest, 
where the answer is already known and can be returned 
without making further recursive calls.  

For Fibonacci, the base cases are:

fib(0)=0 :  When n=0, the Fibonacci number is 0.
fib(1)=1 :  When n=1, the Fibonacci number is 1. 

Recurrsive case:

The recursive case is the part of the function that 
defines how the problem is broken down into smaller, 
similar sub-problems. It involves the function calling 
itself with smaller or reduced input, moving closer to 
the base case with each call. This ensures the problem 
is eventually solved through a series of smaller, 
manageable steps.

For Fibonacci, the recursive case follows the formula :  

fib(n)  =  fib(n-1)  + fib(n-2)

This means to calculate fib(n),  you need the sum of the 
two previous Fibonacci numbers (fib(n−1) and fib(n−2)).*/

function fib(n) {
    // Step 1: Define the base case(s) here.
    // Hint: What is the value of Fibonacci(0) and Fibonacci(1)?
    //Answer: Fibonacci(0) = 0 and Fibonacci(1) = 1
    if (n === 0) return 0;
    if (n === 1) return 1;
    // Step 2: Define the recursive case here.
    // Hint: Return the sum of Fibonacci(n-1) and Fibonacci(n-2).
    return fib(n - 1) + fib(n - 2);
}

console.log(`Fibonacci of 0 is: ${fib(0)}`);  // 0
console.log(`Fibonacci of 1 is: ${fib(1)}`);  // 1
console.log(`Fibonacci of 2 is: ${fib(2)}`);  // 1
console.log(`Fibonacci of 3 is: ${fib(3)}`);  // 2
console.log(`Fibonacci of 4 is: ${fib(4)}`);  // 3
console.log(`Fibonacci of 5 is: ${fib(5)}`);  // 5
console.log(`Fibonacci of 6 is: ${fib(6)}`);  // 8
console.log(`Fibonacci of 10 is: ${fib(10)}`);  // 55

/*Ouput: 
Fibonacci of 0 is: 0 
Fibonacci of 1 is: 1 
Fibonacci of 2 is: 1 
Fibonacci of 3 is: 2 
Fibonacci of 4 is: 3 
Fibonacci of 5 is: 5 
Fibonacci of 6 is: 8 
Fibonacci of 10 is: 55 */