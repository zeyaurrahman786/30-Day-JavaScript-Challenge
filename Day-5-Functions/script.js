// Day 5: Functions



// Tasks/Activities:


// Activity 1: Function Declaration

// * Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(number) {
    if(number % 2 === 0){
        console.log("Number is even");
    }
    else{
        console.log("Number is odd");
    }
}

checkEvenOdd(10); // Output: Number is even


// * Task 2: Write a function to calculate the square of a number and return the result.
function calculateSquare(number) {
    return number * number;
}

console.log(calculateSquare(5)); // Output: 25



// Activity 2: Function Expression

// * Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
let findMax = (num1, num2) => {
    console.log(Math.max(num1, num2));
}

findMax(5, 10); // Output: 10


// * Task 4: Write a function expression to concatenate two strings and return the result.
let concatenateStrings = (str1, str2) => {
    return str1 + str2;
}

console.log(concatenateStrings("Hello", " World")); // Output: Hello World



// Activity 3: Arrow Functions

// * Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
let sum = (num1, num2) => {
    return num1 + num2;
}

console.log(sum(20, 10)); // Output: 30


// * Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
let containsChar = (str, char) => {
    return str.includes(char);
}

console.log(containsChar("Hello World", "o")); // Output: true



// Activity 4: Function Parameters and Default Values

// * Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function multiply(num1, num2 = 1) {
    return num1 * num2;
}

console.log(multiply(20, 5)); // Output: 50


// * Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
function greetPerson(name = "Guest", age = 0) {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greetPerson("Zeyaur Rahman", 22)); // Output: Hello, John Doe! You are 30 years old.



// Activity 5: Higher-Order Functions

// * Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function callFunction(func, num) {
    for(let i = 0; i < num; i++){
        func();
    }
}

function greet() {
    console.log("Hello!");
}

callFunction(greet, 5); // Output: Hello! Hello! Hello! Hello! Hello!


// * Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
function applyFunctions(func1, func2, value) {
    let result = func1(value);
    return func2(result);
}

function addOne(num) {
    return num + 1;
}

function square(num) {
    return num * num;
}

console.log(applyFunctions(addOne, square, 5)); // Output: 36 (5 + 1)^2 = 36