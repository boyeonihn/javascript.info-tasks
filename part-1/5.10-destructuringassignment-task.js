/* Destructuring assignment
importance: 5
We have an object:

let user = {
  name: "John",
  years: 30
};
Write the destructuring assignment that reads:

name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)

*/

// MY SOLUTION

let user = {
    name: "John",
    years: 30
  };
let {name, years: age, isAdmin = false} = user;  


/* The maximal salary
importance: 5
There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/

// MY SOLUTION
function topSalary(salaries) {
    if (Object.keys(salaries).length == 0) {
        return null;
    }
    else {
        let maxSal = 0;
        let maxName = null; 
        for (let [name, salary] of Object.entries(salaries)) {
            if (salary > maxSal) {
                maxSal = salary; 
                maxName = name; 
            }

        }
        return maxName; 
    }
}