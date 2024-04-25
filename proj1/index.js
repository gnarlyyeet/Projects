// first js code
// dyanamic language
console.log('hello world');

// primitive/value types
let name = 'AL'; // string literal
let age = 23; // number literal
let isApproved = true; // boolean literal
let und = undefined;
let undef = null; // clear value of a variable

// reference types
function greet(name, lastName) { // function performing a task
    console.log('hello ' + name + ' ' + lastName);
}
greet('John', 'Smith');
// calculating a value
function square(number) {
    return number*number;
}
console.log(square(2));

let selectedColors = ['red', 'blue']; // array literal
selectedColors[2] = 1;
console.log(selectedColors.length);

let person = {
    name: 'AL',
    age: 23
}; // object literal

// dot notation
person.name = 'LA'

// bracket notation
let selection = 'name';
person[selection] = 'BOB';

console.log(person.name);

console.log(name);
// variables cannot be reserved keywords
// should be meaningful
// cannot start with a number
// cannot contain a space or hyphen
// are case sensitive

let firstName = 'Alec';
let lastName = 'Ritzrow';
// camelCase

// constant variable: const interestRate = 0.3;
// normal variable: let interestRate = 1;
// console.log(interestRate);
