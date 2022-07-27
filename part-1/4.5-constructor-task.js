/* Tasks
Two functions – one object
importance: 2
Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A;
let b = new B;

alert( a == b ); // true
If it is, then provide an example of their code.
*/

// MY SOLUTION 
// You can if you have the constructor function return a particular object

let obj = {}; 

function A(){
    return obj; 
}

function B() {
    return obj; 
}


/* Create new Calculator
importance: 5
Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

*/


// MY SOLUTION
function Calculator() {
    this.read = function() {
        this.a = prompt('a?', '');
        this.b = prompt('b?', '')

    },
    this.sum = function() {
        return this.a + this.b;
    },
    this.mul = function() {
        return this.a * this.b; 
    }
}


/* Create new Accumulator
importance: 5
Create a constructor function Accumulator(startingValue).

Object that it creates should:

Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
The read() method should use prompt to read a new number and add it to value.
In other words, the value property is the sum of all user-entered values with the initial value startingValue.

Here’s the demo of the code:

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values

*/

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function(){
        this.value += +prompt('New number?', '')
    };
}