/* What's the result of OR?
importance: 5
What is the code below going to output?

alert( null || 2 || undefined );
*/

// MY SOLUTION 
alert( null || 2 || undefined ) // return 2

/* What's the result of OR'ed alerts?
importance: 3
What will the code below output?

alert( alert(1) || 2 || alert(3) );
*/

// MY SOLUTION 
alert( alert(1) || 2 || alert(3) ) // alert(1) is truthy? -> true 

/* answer was wrong: the correct answer is first 1, then 2
** call to alert does not return a value -> undefined
** SO... even though alert(1) shows us an ALERT that says 1, itself is undefined -> falsy
** so it moves on to 2, which is truthy


/* What is the result of AND?
importance: 5
What is this code going to show?

alert( 1 && null && 2 );
*/

// MY SOLUTION 
alert( 1 && null && 2 ) //null 


/* What is the result of AND'ed alerts?
importance: 3
What will this code show?

alert( alert(1) && alert(2) );

*/

// MY SOLUTION 
alert( alert(1) && alert(2) ) // UNDEFINED 

// technically half right -> actually, it first alerts 1, then alerts UNDEFINED


/* The result of OR AND OR
importance: 5
What will the result be?

alert( null || 2 && 3 || 4 );
*/

// MY SOLUTION 
alert( null || 2 && 3 || 4 ); // 2 && 3 is truthy 

// 2 && 3 executes first (higher precedence than || )
// both are truthy -> so 3 remains 
// becomes alert( null || 3 || 4)
// answer is 3


/* Check the range between
importance: 3
Write an if condition to check that age is between 14 and 90 inclusively.

“Inclusively” means that age can reach the edges 14 or 90.
*/


// MY SOLUTION
if (age >= 14 && age <= 90) {
    return true; 
}


/* Check the range outside
importance: 3
Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it.
*/

// MY SOLUTION
if (age < 14 || age > 90)
if (!(age >= 14 && age <= 90))


/* A question about "if"
importance: 5
Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );

*/ 

// MY SOLUTION 
if (-1 || 0) alert( 'first' ); // execute
if (-1 && 0) alert( 'second' ); // not execute
if (null || -1 && 1) alert( 'third' ); // execute 



/* Check the login
importance: 3
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

*/

let user = prompt("Who's there?", '') 
if (user == "Admin") {
    let pw = prompt('Please enter password', '');
    if (pw == "TheMaster") {
        alert("Welcome!")
    }
    else if (pw != null) {
        alert("Wrong password")
    }
    else {
        alert("Cancelled")
    }
}
else if (user != null) {
    alert("I don't know you");
}
else alert('Cancelled');
