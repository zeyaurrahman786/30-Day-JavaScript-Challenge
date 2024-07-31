// Day 19 : Regular Expression



// Tasks/Activities :


// Activity 1 : Basic Regular Expressions

// Task 1 : Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
let str = "This is a 30 Days JavaScript Challenge. I Love JavaScript";
let regex = /JavaScript/g;
let matches = str.match(regex);
console.log(matches);

console.log();


// Task 2 : Write a regular expression to match all digits in a string. Log the matches.
let str2 = "Random Digits are 123 456 789";
let regex2 = /\d/g;
let matches2 = str2.match(regex2);
console.log(matches2);

console.log();


// Activity 2 : Character Classes and Quantifiers

// Task 3 : Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
let str3 = "JavaScript is a Programming Language.";
let regex3 = /\b[A-Z][a-z]*\b/g;
let matches3 = str3.match(regex3);
console.log(matches3);

console.log();


// Task 4 : Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
let str4 = "30 Days JavaScript Challenge by Hitesh Sir 123.";
let regex4 = /\d+/g;
let matches4 = str4.match(regex4);
console.log(matches4);

console.log();


// Activity 3 : Grouping and Capturing 

// Task 5 : * Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
let str5 = "(123) 456-7890";
let regex5 = /\((\d{3})\) (\d{3})-(\d{4})/;
let matches5 = str5.match(regex5);
console.log(matches5);

console.log();

// Task 6 : Write a regular expression to capture the username and domain from an email address. Log the captures.
let str6 = "user@example.com";
let regex6 = /(\w+)@(\w+\.\w+)/;
let matches6 = str6.match(regex6);
console.log(matches6);

console.log();


// Activity 4 : Assertions and Boundaries

// Task 7 : Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
let str7 = "Hello world!";
let regex7 = /^\w+/;
let matches7 = str7.match(regex7);
console.log(matches7);

console.log();


// Task 8 : Write a regular expression to match a word only if it is at the end of a string. Log the matches.
let str8 = "Hello world!";
let regex8 = /\w+$/;
let matches8 = str8.match(regex8);
console.log(matches8);

console.log();


// Activity 5 : Practical Applications

// Task 9 : Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
let password = "Passw0rd!";
let regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
let isValid = regex9.test(password);
console.log(isValid);

console.log();


// Task 10 : Write a regular expression to validate a URL. Log whether the URL is valid.
let url = "https://www.urlinfo.com";
let regex1 = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\/?]?.*)$/;
let isValid2 = regex1.test(url);
console.log(isValid2);