// Day 3: Control Structures



// Tasks/Activities:


// Activity 1: If-Else Statements

// * Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console. 
let number1 = 10;
 
if(number1 > 0){
    console.log("Number is positive");
}

else if(number1 < 0){
    console.log("Number is negative");
}

else{
    console.log("Number is zero");
}



// * Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
let age = 20;

if(age >= 18){
    console.log("Eligible to vote");
}

else{
    console.log("Not eligible to vote");
}


// Activity 2: Nested If-Else Statements


// * Task 3: Write a program to find the largest of three numbers using nested if-else statements.
let number2 = 20;
let number3 = 15;

if(number1 > number2){
    if(number1 > number3){
        console.log("Number 1 is the largest.");
    }
    else{
        console.log("Number 3 is the largest.");
    }
}

else if(number2 > number1){
    if(number2 > number3){
        console.log("Number 2 is the largest.");
    }
    else{
        console.log("Number 3 is the largest.");
    }
}

else{
    console.log("Number 1 and Number 2 are equal.");
}



// Activity 3: Switch Case

// * Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let dayOfWeek = 4;

switch (dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}


// * Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
let score = 85;

switch (true) {
    case score >= 90:
        console.log("Grade: A");
        break;
    case score >= 80:
        console.log("Grade: B");
        break;
    case score >= 70:
        console.log("Grade: C");
        break;
    case score >= 60:
        console.log("Grade: D");
        break;
    default:
        console.log("Grade: F");
}


// Activity 4: Conditional (Ternary) Operator

// * Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
let number7 = 15;

let result = number7 % 2 === 0? "Number is even" : "Number is odd";

console.log(result);



// Activity 5: Combining Conditions

// * Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year = 2020;

let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(`Is ${year} a leap year? Ans :- ${isLeapYear}`);