// Day 6: Arrays



// Tasks/Activities:


// Activity 1: Array Creation and Access

// * Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1); // Output: [1, 2, 3, 4, 5]
console.log(); // This is only for Space


// * Task 2: Access the first and last elements of the array and log them to the console.
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2[0]); // Output: 1
console.log(arr2[4]); // Output: 5
console.log(); // This is only for Space



// Activity 2: Array Methods (Basic)

// * Task 3: Use the push method to add a new number to the end of the array and log the updated array.
let arr3 = [1, 2, 3, 4, 5];
arr3.push(6);
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6]
console.log(); // This is only for Space


// * Task 4: Use the pop method to remove the last element from the array and log the updated array. 
let arr4 = [1, 2, 3, 4, 5];
arr4.pop();
console.log(arr4); // Output: [1, 2, 3, 4]
console.log(); // This is only for Space


// * Task 5: Use the shift method to remove the first element from the array and log the updated array.

let arr5 = [1, 2, 3, 4, 5];
arr5.shift();
console.log(arr5); // Output: [2, 3, 4, 5]
console.log(); // This is only for Space


// * Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
let arr6 = [1, 2, 3, 4, 5];
arr6.unshift(0);
console.log(arr6); // Output: [0, 1, 2, 3, 4, 5]
console.log(); // This is only for Space



// Activity 3: Array Methods (Intermediate)

// * Task 7: Use the map method to create a new array where each number is doubled and log the new array.
let arr7 = [1, 2, 3, 4, 5];
let arr8 = arr7.map(num => num * 2);
console.log(arr8); // Output: [2, 4, 6, 8, 10]
console.log(); // This is only for Space


// * Task 8: Use the filter method to create a new array with only even numbers and log the new array. 
let arr9 = [1, 2, 3, 4, 5];
let arr10 = arr9.filter(num => num % 2 === 0);
console.log(arr10); // Output: [2, 4]
console.log(); // This is only for Space


// * Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
let arr11 = [1, 2, 3, 4, 5];
let sum = arr11.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of all numbers:", sum); // Output: Sum of all numbers: 15
console.log(); // This is only for Space



// Activity 4: Array Iteration

// * Task 10: Use a for loop to iterate over the array and log each element to the console.
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
console.log(); // This is only for Space


// * Task 11: Use the forEach method to iterate over the array and log each element to the console.

let numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => console.log(num));
console.log(); // This is only for Space



// Activity 5: Multi-dimensional Arrays

// * Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] 
console.log(); // This is only for Space


// * Task 13: Access and log a specific element from the two-dimensional array.

let matrix2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix2[0][0]); // Output: 1
console.log(matrix2[1][1]); // Output: 5
console.log(matrix2[2][2]); // Output: 9