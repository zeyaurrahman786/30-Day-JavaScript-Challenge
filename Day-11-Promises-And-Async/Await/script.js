// Day 11 : Promises and Async/Await

// Task/Activities


// Activity 1: Understanding Promises

// Task 1 : Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promiseResolve = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

promiseResolve.then((message) => console.log(message));

console.log();

// Task 2 : Create a promise that rejects with an error message after a 2-second timeout and handle the error using.catch().
const promiseReject = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("Promise rejected after 2 seconds"));
  }, 2000);
});

promiseReject.catch((error) => console.error(error.message));

console.log();


// Activity 2: Chaining Promises

// Task 3 : Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchData = (data, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched ${data}`);
      resolve(data);
    }, delay);
  });
};

fetchData("Data 1", 1000)
  .then(() => fetchData("Data 2", 1000))
  .then(() => fetchData("Data 3", 1000));

console.log();



// Activity 3: Using Async/Await

// Task 4 : * Write an async function that waits for a promise to resolve and then logs the resolved value.
const asyncFunction = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved value");
    }, 2000);
  });

  const result = await promise;
  console.log(result);
};

asyncFunction();

console.log();

// Task 5 : Write an async function that handles a rejected promise using try-catch and logs the error message.
const asyncFunctionWithError = async () => {
  const promise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Something went wrong"));
    }, 2000);
  });

  try {
    await promise;
  } catch (error) {
    console.error(error.message);
  }
};

asyncFunctionWithError();

console.log();



// Activity 4: Fetching Data from an API

// Task 6 : Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

console.log();

// Task 7 : Use the fetch API to get data from a public API and log the response data to the console using async/await.
const fetchDataAsync = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

fetchDataAsync();

console.log();



// Activity 5: Concurrent Promises

// Task 8 : Use Promise.all to wait for multiple promises to resolve and then log all their values.
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 3000)
);

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

console.log();

// Task 9 : * Use Promise. race to log the value of the first promise that resolves among multiple promises.
const promise4 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 4 resolved"), 1000)
);
const promise5 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 5 resolved"), 2000)
);
const promise6 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 6 resolved"), 3000)
);

Promise.race([promise4, promise5, promise6]).then((value) => {
  console.log(value);
});

console.log();