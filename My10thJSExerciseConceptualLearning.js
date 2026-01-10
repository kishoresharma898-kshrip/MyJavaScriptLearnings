/*Step-1: Navigate in your browser to http://www.example.com you will see a webpage with a simple 
message:

Example Domain

This domain is established to be used for illustrative examples in documents. You may use this 
domain in examples without prior coordination or asking for permission.

Step-2: To capture user input, you can use the built-in prompt() method, like this:
let answer = prompt('What is your name?'); 

Once you have the user-provided input inside the answer variable, you can manipulate it any way you 
need to.

For example, you can output the typed-in information on the screen, as an <h1> HTML element.

Here's how you'd do that:*/

// let answer = prompt('What is your name?');
// if (typeof(answer) === 'string') {
//     var h1 = document.createElement('h1')
//     h1.innerText = answer;
//     document.body.innerText = '';
//     document.body.appendChild(h1);
// }

/*Step-3: This is probably the quickest and easiest way to capture user input on a website, but doing it 
this way is not the most efficient approach, especially in more complex scenarios.

This is where HTML forms come in.

You can code a script which will take an input from an HTML form and display the text that a user 
types in on the screen.

Here's how this is done.

You'll begin by coding out a "test solution" to the task at hand: */

// var h1 = document.createElement('h1')
// h1.innerText = "Type into the input to make this text change"

// var input = document.createElement('input')
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);

/*Step-4: So, you're essentially doing the same thing that you did before, only this time you're also 
dynamically adding the input element, and you're setting its HTML type attribute to text. That way, 
when you start typing into it, the letters will be showing in the h1 element above.

However, you're not there quite yet. At this point, the code above, when run on a live website, 
will add the h1 element with the text "Type into the input to make this text change", and an empty 
input form field under it.

You can try this code out yourself, for example, by pointing your browser to the example.com 
website, and running the above code in the console. 

The next thing that you need to do is: set up an event listener. The event you're listening for is 
the change event. In this case, the change event will fire after you've typed into the input and 
pressed the ENTER key.

Here's your updated code:*/

// var h1 = document.createElement('h1')
// h1.innerText = "Type into the input to make this text change"

// var input = document.createElement('input')
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);

// input.addEventListener('change', function() {
//     console.log(input.value)
// })

/*Step-5: This time, when you run the above code on the said example.com website, subsequently typing some 
text into the input field and pressing the enter key, you'll get the value of the typed-in text 
logged to the console.

Now, the only thing that you still need to do to complete my code is to update the text content of 
the h1 element with the value you got from the input field.

Here's the complete, updated code: */

var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})