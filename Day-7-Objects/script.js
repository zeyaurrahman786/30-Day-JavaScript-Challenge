// Day 7: Objects



// Tasks/Activities:

// Activity 1: Object Creation and Access


// * Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
let book = {
    title: "Book Title",
    author: "Author Name",
    year: 2021
};

console.log(book); // Output: { title: 'Book Title', author: 'Author Name', year: 2021 }


// * Task 2: Access and log the title and author properties of the book object.
console.log(book.title); // Output: Book Title

console.log(book.author); // Output: Author Name


// Activity 2: Object Methods

// * Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
book.getDetails = function() {
    return `${this.title} by ${this.author}`;
};

console.log(book.getDetails()); // Output: Book Title by Author Name


// * Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.updateYear = function(newYear) {
    this.year = newYear;
    return this;
};

console.log(book.updateYear(2022).getDetails()); // Output: Book Title by Author Name (updated year: 2022)



// Activity 3: Nested Objects

// * Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let library = {
    name: "Library Name",
    books: [
        {
            title: "Book 1",
            author: "Author 1",
            year: 2021
        },
        {
            title: "Book 2",
            author: "Author 2",
            year: 2022
        }
    ]
};

console.log(library); // Output: { name: 'Library Name', books: [ { title: 'Book 1', author: 'Author 1', year: 2021 }, { title: 'Book 2', author: 'Author 2', year: 2022 } ] }


// * Task 6: Access and log the name of the library and the titles of all the books in the library.

console.log(library.name); // Output: Library Name

library.books.forEach(book => {
    console.log(book.title);
}); // Output: Book 1, Book 2



// Activity 4: The this Keyword

// * Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.getDetailsWithThis = function() {
    return `${this.title} by ${this.author} (year: ${this.year})`;
};

console.log(book.getDetailsWithThis()); // Output: Book Title by Author Name (year: 2021)



// Activity 5: Object Iteration

// * Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
for (let key in book) {
    console.log(`${key}: ${book[key]}`);
} // Output: title: Book Title, author: Author Name, year: 2021


// * Task 9: Use Object.keys and object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book)); // Output: [ 'title', 'author', 'year' ]

console.log(Object.values(book)); // Output: [ 'Book Title', 'Author Name', 2021 ]