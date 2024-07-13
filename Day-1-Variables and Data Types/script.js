// Day 1 : Variables and Data Types 

// Tasks/Activities :



// Activity 1 : Variable Declaration 

// Task 1 : Declare a variable using var, assign it a number, and log the value to the consloe.
var number = 10;
console.log(number);

// Task 2 : Declare a variable using let, assign it a string, and log the value to the consloe.
let string = "Zeyaur Rahman";
console.log(string);



// Activity 2 : Constant Declaration

// Task 3 : Declare a variable using const, assign it a boolean value, and log the value to the consloe.
const boolean = true;
console.log(boolean);



// Activity 3 : Data Types

// Task 4 : Create a variable of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.

// 1 number
const age = 24;
console.log(age);
console.log(typeof age);

// 2 string
const name = "Zeyaur Rahman";
console.log(name);
console.log(typeof name);

// 3 boolean
const isMarried = false;
console.log(isMarried);
console.log(typeof isMarried);

// 4 array
const friends = ["Arbaj", "Neyaj", "Kaif"];
console.log(friends);
console.log(typeof friends);

// 5 object
const person = {
  name: "Zeyaur Rahman",
  age: 24,
  isMarried: false,
};
console.log(person);



// Activity 4 : Rearranging Variables

// Task 5 : Declare a variable using let, assign it an initial value, reassign a new value, and log both value to the consloe.
let initialValue = 50;
console.log("Initial value: " + initialValue);

let newValue = 80;
console.log("New value: " + newValue);



// Activity 5 : Understanding const

// Task 6 : Try reassigning a variable declared with const and observe the error.
const myNumber = 20;
console.log("myNumber: " + myNumber);
myNumber = 30; // This will give the error.
console.log("myNumber: " + myNumber);

// (In JavaScript, const is a keyword used to declare a variable that cannot be reassigned a new value. It is similar to let, but the value of a const variable cannot be changed once it it has been declared.)