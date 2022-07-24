/* Working with variables
importance: 2
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
*/

// MY SOLUTION
let admin;
let name; // Declare two variables: admin and name.

name = "John"; // Assign the value "John" to name.
admin = name; // Copy the value from name to admin.

alert(admin); // Show the value of admin using alert (must output “John”)


/* Giving the right name
importance: 3
Create a variable with the name of our planet. How would you name such a variable?
Create a variable to store the name of a current visitor to a website. How would you name that variable?
*/

// MY SOLUTION 
const ourPlanet = "Earth"; // Create a variable with the name of our planet. How would you name such a variable?

let currentUser; // Create a variable to store the name of a current visitor to a website. How would you name that variable?


/* Uppercase const?
importance: 4
Examine the following code:

const birthday = '18.04.1982';

const age = someCode(birthday);
Here we have a constant birthday date and the age is calculated from birthday with the help of some code (it is not provided for shortness, and because details don’t matter here).

Would it be right to use upper case for birthday? For age? Or even for both?

const BIRTHDAY = '18.04.1982'; // make uppercase?

const AGE = someCode(BIRTHDAY); // make uppercase?

*/

// MY SOLUTION 
const BIRTHDAY = '18.04.1982'; // It is appropriate to make uppercase because it is a difficult-to-remember value that is known prior to execution
const AGE = someCode(BIRTHDAY); // Should not make uppercase because the value is not calculated prior, but upon execution 


