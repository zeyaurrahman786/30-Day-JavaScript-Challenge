// Day 14 : Classes

// Tasks/Activities :

// Activity 1: Class Definition

// Task 1 : Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person1 = new Person("Zeyaur Rahman", 23);
console.log(person1.greeting());

console.log();

// Task 2 : Add a method to the Person class that updates the age property and logs the updated age.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }
}

const person2 = new Person("Zeyaur Rahman", 23);
person2.updateAge(32);

console.log();

// Activity 2: Class Inheritance

// Task 3 : Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return this.studentId;
  }
}

const firstStudent = new Student("Shahbaz Alam", 24, "S12345");
console.log(firstStudent.getStudentId());

console.log();

// Task 4 : Override the greeting method in the student class to include the student ID in the message. Log the overridden greeting message.
class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  greeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

const secondStudent = new Student("Neyaj Alam", 22, "S12345");
console.log(secondStudent.greeting());

console.log();

// // Activity 3: Static Methods and Properties

// Task 5 : Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static genericGreeting() {
    return "Hello from the Person class!";
  }
}

console.log(Person.genericGreeting());

console.log();

// Task 6 : Add a static property to the student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class Student extends Person {
  static studentCount = 0;

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount++;
    console.log(`Total number of students: ${Student.studentCount}`);
  }
}

const student1 = new Student("Arbaj Hussain", 20, "3");
const student2 = new Student("Kaif Ansari", 22, "4");

console.log();

// Activity 4: Getters and Setters

// Task 7 : Add a getter method to the Person class to return the full name (assume a firstName and LastName property). Create an instance and log the full name using the getter.
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const person3 = new Person("Zeyaur", "Rahman", 23);
console.log(person3.fullName);

console.log();

// Task 8 : Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person4 = new Person("Chinmay", "Kaitade", 30);
person4.fullName = "Aman Sharma";
console.log(person4.fullName);

console.log();

// Activity 5 : Private Fields (Optional)

// Task 9 : Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
    } else {
      console.log("Insufficient funds or invalid amount.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const account1 = new Account(1000);
account1.deposit(500);
account1.withdraw(300);
console.log(`Final balance: $${account1.getBalance()}`);

console.log();

// Task 10 : Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
class Account {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposit: $${amount}`);
      this.logBalance();
    } else {
      console.log("Deposit amount must be positive");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdraw: $${amount}`);
      this.logBalance();
    } else {
      console.log("Invalid withdraw amount");
    }
  }

  logBalance() {
    console.log(`Balance: $${this.balance}`);
  }
}

// Create an instance of the Account class
let myAccount = new Account("Zeyaur Rahman", 1000);

// Test the deposit method
myAccount.deposit(200);

// Test the withdraw method
myAccount.withdraw(400);

// Test deposit with a negative amount
myAccount.deposit(-300);

// Test withdraw with an amount greater than the balance
myAccount.withdraw(2000);

// Test withdraw with a negative amount
myAccount.withdraw(-300);
