/* Sum numbers from the visitor
importance: 5
Create a script that prompts the visitor to enter two numbers and then shows their sum.
*/

// MY SOLUTION
let a = +prompt('Enter first number', '');
let b = +prompt('Enter second number', '');

alert(a + b); 

/* A random number from min to max
importance: 2
The built-in function Math.random() creates a random value from 0 to 1 (not including 1).

Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

Examples of its work:

alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
*/

// MY SOLUTION 
function random(min, max) {
    return min + Math.random() * (max - min); 
}

