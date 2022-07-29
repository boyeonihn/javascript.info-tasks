/*Is array copied?
importance: 3
What is this code going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ?
*/

// MY SOLUTION
fruits.length // 4 - because the copy and fruits both refer to the same object

/* 
Array operations.
importance: 5
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll
*/

// MY SOLUTION

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[(Math.floor(styles.length/2))] = "Classics";
alert(styles.shift());
styles.unshift("Rap", "Raggae"); 


/* Calling in an array context
importance: 5
What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?
*/

// MY SOLUTION

let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // this is referred as the entire array object -> result is a, b function(){...}; 


/* Sum input numbers
importance: 4
Write the function sumInput() that:

Asks the user for values using prompt and stores the values in the array.
Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
Calculates and returns the sum of array items.
P.S. A zero 0 is a valid number, please don’t stop the input on zero.
*/

// MY SOLUTION
function sumInput() {
    let array = [];
    while (true) {
        let valueInput = prompt('Give me a number', ''); 
        if (valueInput == '' || valueInput == null || !isFinite(value)) break; 
        array.push(+valueInput); 

    }
    return array.reduce((a,b) => a + b, 0); 
}


/* A maximal subarray
importance: 2
The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will return that sum.

For instance:

getMaxSubSum([-1, 2, 3, -9]) == 5 (the sum of highlighted items)
getMaxSubSum([2, -1, 2, 3, -9]) == 6
getMaxSubSum([-1, 2, 3, -9, 11]) == 11
getMaxSubSum([-2, -1, 1, 2]) == 3
getMaxSubSum([100, -9, 2, -3, 5]) == 100
getMaxSubSum([1, 2, 3]) == 6 (take all)
If all items are negative, it means that we take none (the subarray is empty), so the sum is zero:

getMaxSubSum([-1, -2, -3]) = 0
Please try to think of a fast solution: O(n2) or even O(n) if you can.
*/

// MY SOLUTION
function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0; 

    for (let i = 0; i < arr.length; i++) {
        partialSum += arr[i]; 
        maxSum = Math.max(partialSum, maxSum); 
        if (partialSum < 0) {
            partialSum = 0; 
        }
    }
    return maxSum; 
}