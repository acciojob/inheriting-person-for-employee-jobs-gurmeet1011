// Define the Person class
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Define the Employee class, inheriting from Person
function Employee(name, age, jobTitle) {
    // Call the Person constructor
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Inherit methods from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add jobGreet method to Employee
Employee.prototype.jobGreet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Create an Employee instance
const bob = new Employee("Bob", 30, "Manager");
const alice=new Person("Alice",25)
alice.greet();
bob.jobGreet(); 

Window.Person=Person;
Window.Employee=Employee;



