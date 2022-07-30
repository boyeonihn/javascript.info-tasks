/* Sum the properties
importance: 5
There is a salaries object with arbitrary number of salaries.

Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.

If salaries is empty, then the result must be 0.

For instance:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
*/

// MY SOLUTION
function sumSalaries(salaries){
    let arr = Object.values(salaries);
    if (arr.length == 0) {
        return 0
    }
    else {
        let sum = 0;
        for (let salary of arr) {
            sum += salary; 
        }
        return sum; 
    }

}

/* Count properties
importance: 5
Write a function count(obj) that returns the number of properties in the object:

let user = {
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
Try to make the code as short as possible.

P.S. Ignore symbolic properties, count only “regular” ones.

*/

// MY SOLUTION
function count(obj) {
    return Object.keys(obj).length;
}