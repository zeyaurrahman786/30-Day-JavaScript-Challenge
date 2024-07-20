// Day 8: ES6+ Features

// Tasks/Activities:

// Activity 1: Template Literals

// * Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "Zeyaur Rahman";
let age = 22;
console.log(`Hello, ${name}! You are ${age} years old.`);



// * Task 2: Create a multi-line string using template literals and log it to the console.
let multilineString = `
ES6 (ECMAScript 2015) introduced several new features and enhancements to JavaScript, revolutionizing the way developers write and structure their code. Since ES6, subsequent versions (ES7, ES8, etc.) have continued to add more features and improvements.
`;
console.log(multilineString);



// Activity 2: Destructuring

// * Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let numbers = [1, 2, 3, 4, 5];
let [first, second] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2


// * Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
    title: "Book Title",
    author: "Author Name"
};
let { title, author } = book;
console.log(title); // Output: Book Title
console.log(author); // Output: Author Name



// Activity 3: Spread and Rest Operators

// * Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let num = [1, 2, 3, 4, 5];
let newArray = [...num, 6, 7, 8];
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]


// * Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
console.log(sum(10, 20, 30)); // Output: 60



// Activity 4: Default Parameters

// * Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(num1, num2 = 1) {
    return num1 * num2;
}
console.log(multiply(20, 5)); // Output: 100
console.log(multiply(10)); // Output: 10



// Activity 5: Enhanced Object Literals

// * Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let person = {
    name: "Virat Kohli",
    age: 32,
    greet() {
        console.log(`Hello, my name is ${this.name}!`);
    }
};
console.log(person); // Output: { name: 'Virat Kohli', age: 32, greet: [Function: greet] }
person.greet(); // Output: Hello, my name is Virat Kohli!


// * Task 9: Create an object with computed property names based on variables and log the object to the console.
let key1 = 'name';
let key2 = 'age';
const myObject = {
  [key1]: 'John Doe',
  [key2]: 30,
  ['isAdmin']: true
};
console.log(myObject); // Output: { name: 'John Doe', age: 30, isAdmin: true }