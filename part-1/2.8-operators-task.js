/* The postfix and prefix forms
importance: 5
What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

let c = ++a; // ?
let d = b++; // ?
*/

//MY SOLUTION
let c = ++a; 
let d = b++; 

// a = 2; b = 2; c = 2; d = 1; 

/* Assignment result
importance: 3
What are the values of a and x after the code below?

let a = 2;

let x = 1 + (a *= 2);
*/

// MY SOLUTION 

a = 4;
x = 5;



/* Type conversions
importance: 5
What are results of these expressions?

"" + 1 + 0
"" - 1 + 0
true + false
6 / "3"
"2" * "3"
4 + 5 + "px"
"$" + 4 + 5
"4" - 2
"4px" - 2
"  -9  " + 5
"  -9  " - 5
null + 1
undefined + 1
" \t \n" - 2
Think well, write down and then compare with the answer.
*/

// MY SOLUTION
"" + 1 + 0  // '10'
"" - 1 + 0 // -1 ** because the string conversion only happens with '+' operand 
true + false // 1
6 / "3" // 2 
"2" * "3" // 6 
4 + 5 + "px" // '9px'
"$" + 4 + 5 // '$45'
"4" - 2 // 2
"4px" - 2 // NaN
"  -9  " + 5 // "  -9  5"
"  -9  " - 5 // -14
null + 1 // 1 
undefined + 1 // NaN
" \t \n" - 2 // NaN

/* Fix the addition
importance: 5
Here’s a code that asks the user for two numbers and shows their sum.

It works incorrectly. The output in the example below is 12 (for default prompt values).

Why? Fix it. The result should be 3.

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12

*/

// MY SOLUTION 
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 12