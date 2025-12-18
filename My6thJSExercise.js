/*Task 1:
Write a function named letterFinder that accepts two parameters: word and match

Note: In JavaScript, strings can be treated similarly to arrays. You can access individual characters in a string using an index, just like you would with an array. Even though strings are not explicitly declared as arrays, they behave in a similar way when accessing their characters by index.

Task 2:
Code a for loop inside the function's body. The for loop's counter should start at zero, increment by 1 on each iteration and and run as long as the counter variable's value is less than the length of the word parameter.

Task 3:
Inside the for loop, use the counter variable i to access each letter of the word which will allow us to use word[i] .

Check if the current word[i] is equal to the value of match

Note: Strings are like arrays. Each letter in the string can be accessed using an index, starting from 0. Use word[i] to access a letter at index i

Task 4:
If true, log: console.log('Found the', match, 'at', i)

Task 5:
Now write the else condition. Here you'll just console log the following: console.log('---No match found at', i) when word[i] !== match

Note: The else statement runs if the if condition isn’t met. Use it to handle situations where the letters don’t match.

Task 6:
Call the function letterFinder and pass it as its first argument as the string "test" and as its second argument, the string "t"

Note: To run the function, you’ll call it with specific arguments. Here, you pass in the string "test" and the letter "t" to see how the function works.

Your output should be the following:

Found the t at 0

---No match found at 1

---No match found at 2

Found the t at 3

*/

//All tasks solution:

function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] === match) {
           console.log('Found the', match, 'at', i); 
        } else {
            console.log('---No match found at', i);
        }
    }
}
letterFinder("test", 't');

/*Ouput:
Found the t at 0
---No match found at 1
---No match found at 2
Found the t at 3*/
