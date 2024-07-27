// Day 15 : Closures

// Tasks/Activities :



// Activity 1: Understanding Closures

// Task 1 : * Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunction() {
  let outerVariable = "Outer Function is Here";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const inner = outerFunction();
inner();
console.log(); // This is only for space

// Task 2 : Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
  let counter = 0;

  return {
    increment: function () {
      counter++;
    },
    getValue: function () {
      return counter;
    },
  };
}

const myCounter = createCounter();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue());
console.log(); // This is only for space



// Activity 2 : Practical Closures

// Task 3 : Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function idGenerator() {
  let lastId = 0;

  return function () {
    lastId++;
    return lastId;
  };
}

const generateId = idGenerator();
console.log(generateId());
console.log(generateId());
console.log(); // This is only for space

// Task 4 : Create a closure that captures a user's name and returns a function that greets the user by name.
function greetUser(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const greetZeyaur = greetUser("Zeyaur");
greetZeyaur();
console.log(); // This is only for space



// Activity 3 : Closures in Loops

// Task 5 : Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctions() {
  let functions = [];

  for (let i = 0; i < 7; i++) {
    functions.push(
      (function (index) {
        return function () {
          console.log(index);
        };
      })(i)
    );
  }

  return functions;
}

const functionsArray = createFunctions();
functionsArray[0]();
functionsArray[1]();
functionsArray[2]();
functionsArray[3]();
functionsArray[4]();
functionsArray[5]();
functionsArray[6]();
console.log(); // This is only for space


// Activity 4 : Module Pattern

// Task 6 : Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const itemManager = (function () {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
    },
    removeItem: function (item) {
      const index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
      }
    },
    listItems: function () {
      return items;
    },
  };
})();

itemManager.addItem("Pen");
itemManager.addItem("Pencil");
console.log(itemManager.listItems());

itemManager.removeItem("Pen");
console.log(itemManager.listItems());
console.log(); // This is only for space



// Activity 5 : Memoization

// Task 7 : Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2));
console.log(); // This is only for space

// Task 8 : Create a memoized version of a function that calculates the factorial of a number.
function memoizeFactorial() {
  const cache = {};

  return function factorial(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n === 0) {
        cache[n] = 1;
      } else {
        cache[n] = n * factorial(n - 1);
      }
      return cache[n];
    }
  };
}

const factorial = memoizeFactorial();
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(2));