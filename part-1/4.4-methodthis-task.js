/* Using "this" in object literal
importance: 5
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?

*/

// MY SOLUTION
// You get an error 

/* Create a calculator
importance: 5
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

*/

// MY SOLUTION 
let calculator = {
    read() {
        let a = prompt('Enter a value', ''); 
        let b = prompt('Enter the second value', '');
        this.a = Number(a); 
        this.b = Number(b); 
    },
    
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul()); 


/* Chaining
importance: 2
There’s a ladder object that allows to go up and down:

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};
Now, if we need to make several calls in sequence, can do it like this:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0
Modify the code of up, down and showStep to make the calls chainable, like this:

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
Such approach is widely used across JavaScript libraries.

*/

// MY SOLUTION 
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this; 
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this; 
    }
  };  