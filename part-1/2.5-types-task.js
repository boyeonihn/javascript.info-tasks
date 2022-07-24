/* String quotes
importance: 5
What is the output of the script?

let name = "Ilya";

alert( `hello ${1}` ); // ?

alert( `hello ${"name"}` ); // ?

alert( `hello ${name}` ); // ?
*/

// MY SOLUTION
alert( `hello ${1}` ); // result will be `hello 1`

alert( `hello ${"name"}` ); // result will be `hello name`

alert( `hello ${name}` ); // result will be `hello Ilya`