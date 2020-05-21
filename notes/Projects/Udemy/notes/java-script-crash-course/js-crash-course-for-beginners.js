// Notes for Traversy Media: JavaScript Crash Course for Beginners
//  https://www.youtube.com/watch?v=hdI2bqOjy3c
/*WHAT YOU WILL LEARN IN THIS COURSE

    • Variables & Data Types
    • Arrays
    • Object Literals
    • Methods for strings, arrays, objects, etc.
    • Loops – for, while, for...of, forEach, map
    • Conditionals (if, ternary & switch)
    • Functions (normal & arrow)
    • OOP (prototypes & classes)
    • DOM Selection
    • DOM Manipulation
    • Events
    • Basic Form Validation

FURTHER LEARNING

    • Modern JS From the Beginning
        ◦ 21 hour Udemy Course

Youtube:

    • JavaScript DOM Crash Course – 4 parts
    • JS OOP Crash Course
    • High Order Array Methods Video
    • Async JS Crash Course
    • Fetch API & Ajax Crash Course
    • Vanilla JS Playlist (Full of small projects)
    • Framework Crash Courses
    • Etc.
*/    
alert('Hello World');

console.log('Hello World');

console.error('This is an error');
console.warn('This is a warning');
// Console is an object log is a method of the console object

// MDN Console documentation https://developer.mozilla.org/en-US/docs/Web/API/

// __________________________________________________________________

// Variables - var, let, const

    // var - globally scoped, shouldn't use var in production code

// Block level scope

    // let - can reassign values 
    // Ex: let age = 30; age = 31;
    // const - value cannot be changed (but can be updated such as changing the data in an array)

    // Always use const unless you know you're going to reassign the value.

// __________________________________________________________________

// Data Types

    // String, Numbers, Boolean, null, undefined, Symbol

const name = 'John'; //String
const age = 30; //Number
const rating = 4.5; //decimal is just a number not its own data type
const isCool = true; //Boolean True False
const x = null; //null
const y = undefined; //undefined
let z; //initialized variable with no value, const variables must be initialized with a value

console.log(typeof name); //typeof and then the variable for data type

// __________________________________________________________________

// Concatenation

console.log('My name is name and I am age'); 
//Doesn't recognize variables when part of a string

console.log('My name is ' + name + ' and I am ' + age);
// Ending the string and then putting + around the variable name will put the variable in between the string fragments.

// Template String or Template Literals
console.log(`My name is ${name} and I am ${age}`)
//Using backticks and ${variable} allows you to insert a variable inside of a string without ending it.

// __________________________________________________________________

// String properties and methods

const s = 'Hello World!';

console.log(s.length); //Properties don't have extra parenthesis, if it has parenthesis it's a method. Ex. console.log(s.length()) would be incorrect.

console.log(s.toUpperCase()); //This is a method. A method is a function that is associated with an object or class. Notice the parenthesis at the end.

console.log(s.substring(0, 5).toUpperCase()); //starts at position 0 and goes to position 5 of the string then puts all of the characters in uppercase.

console.log(s.split('')); //s.split method asks "how" or "where" you want to split a variable, since we chose nothing between the quotes it splits the entire string into an array of strings

const t = 'technology, computers, it, code';

console.log(t.split(', ')) //in this example, we're telling the split method to split the string every time it sees a comma and a space ", " so it would give us an array of the words ["technology", "computers", "it", "code"]

// __________________________________________________________________

// Arrays - variables that hold multiple values

const numbers = new Array(1,2,3,4,5); //new is what's called a "constructor" this is the OLD way of making an array.

const fruits = ['apples', 'oranges', 'pears', 10, true]; //In JS you can have multiple data types within the same array.

// JS isn't staticly typed, but Typescript is

console.log(fruits[1]); //remember that arrays always start with position 0 so fruits 1 would be "oranges"

fruits[3] = 'grapes' // This is how you would add the string 'grapes' to the 3rd position in the array. It would look like ["apples", "oranges", " pears", "grapes"] if you console.log(fruits);

fruits.push('mangos'); //the push method will add a value to the end of an array.

fruits.pop(); // removes last item in array

fruits.unshift('strawberries') //unshift method adds to the beginning of the array.

console.log(Array.isArray(fruits)); //checks if the fruits function is an array and returns a boolean value of true or false

console.log(fruits.indexOf('oranges')); //indexOf checks the array index of a value in the function "fruits" This will return an index of 2 because we added strawberries to the beginning of the array.

// __________________________________________________________________

// Object Literals

const person = { //creating the function person
    firstName: 'John', //creating the firstName property and assigning it the value John
    lastName: 'Doe',
    age: 30, //properties can take any data type
    hobbies: ['music', 'movies', 'sports'], //including arrays
    address: { //You can even nest properties within properties.
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName); // will print to console the value stored in firstName and the value stored in lastName of the person function.
console.log(person.hobbies[1]); // gives the value stored in the hobbies array at the index of 1 "movies"
console.log(person.address.city); // gives the value stored in city property of the address property in the person function

// In "dot notation" it works like the folder structure of a computer, you will always have the parent first, then the child. It goes from large to small.

//________

// Destructuring - Pulling data from an array and creating variables with it.

const { firstName, lastName, address: { city }} = person; //pulling the firstName, lastName and the embedded value of city out of the function so you can use console.log(city) to display 'Boston' instead of console.log(person.address.city);

person.email = 'john@gmail.com'; //adds email address to the person function in alphabetical order.

//________

//Dealing with Arrays

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
];

console.log(todos); //returns the entire array
console.log(todos[1].text); //returns the second index of the array's text which is 'Meeting with boss'

// JSON - When sending or receiving data to a server you use JSON format.
// https://www.freeformatter.com/json-formatter.html

const todoJSON = JSON.stringify(todos); //Takes JS in todos function and turns it into JSON format. 
console.log(todoJSON);

// __________________________________________________________________

//Loops

// For loop
// 3 parameters, (assignment of the iterator, condition, increment)
for(let i = 0; i > 10; i++) {
    console.log(`For Loop Number: ${i}`); // Using Template Literal to add the output of i function to the end of the string 'For Loop Number: '
}

// While
// 3 parameters, set the variable outside of the loop, while takes in the condition, 
let i = 0; //initialize the variable
while(i < 10) { // while i is less than 10    
    console.log(`While Loop Number: ${i}`);
    i++; //make sure to invrement or the loop will run forever
}

//Looping through Arrays

for(let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
}
//Forof
for(let todo of todos) { // todos is name of original array variable, todo is user chosen variable name.
    console.log(todo.id) //iterates through the ID's in the todos variable and displays them
}


//forEach - loops through arrays
todos.forEach(function(todo) { //forEach takes a function and todo is the variable name we chose for each item.
    console.log(todo.text); //loop through todos array, return text strings
});


//map - create new array from an array
const todoText = todos.map(function(todo) { //map returns an array so we create the todoText variable as a container for the new array data. 
    return todo.text; //returns the text values from the todos array as a new array withe the variable name todoText.
});

console.log(todoText); //post the todoText array variable to the console


//filter - create a new array based on a condition
const todoCompleted = todos.filter(function(todo) { //iterates through array
    return todo.isCompleted === true; //returns the values of the array that contain completed and creates a new array with those values
});
console.log(todoCompleted); //returns the new array

const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text; //only returns the text: portions that are true
});
console.log(todoCompleted);

// __________________________________________________________________

//Conditionals

//if
const x = 4;
const y = 10;

if(x === 10) { //double == does not check for data type === checks type
    console.log('x is 10');
} else if(x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}

//or and

if(x > 5  || y > 10) { //if x is greater than 5 OR y is greater than 10
    console.log('x is more than 5 or y is more than 10');
}

if(x > 5  && y > 10) { //if x is greater than 5 AND y is greater than 10
    console.log('x is more than 5 or y is more than 10');
}

//ternary operator - format = condition / if it's true / if it's not true

const x = 10;

const color = x > 10 ? 'red' : 'blue'; //if color is greater than 10 THEN red ELSE blue
// ? then
// : else
console.log(color);


// switches
const x = 11;

const color = x > 10 ? 'red' : 'blue';
console.log(color);

switch(color) { //switch allows you to take an evaluation and assign 
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

// __________________________________________________________________

//Functions

function addNums(num1, num2) { //function name addNums, num1 and num2 are variable containers
    return num1 + num2; //take num1 and add it to num2 and return it.
}

console.log(addNums(5, 4)); //run the function addNums with the values 5 and 4. If you don't want to log the answer in the console, just addNums(5,4)

//Arrow functions

const addNums = (num1 = 1, num2 = 2) => {
    return num1 + num2;
}
//Notice the similarity between the original function and the arrow function. Instead of using function, we name it as a variable and use the "fat arrow" =>
console.log(addNums(5, 5)); 

// __________________________________________________________________

//Object Oriented Programming

//We can construct objects using a constructor function. Constructor functions with prototypes and ES6 classes.

//Constructor Function
function Person(firstName, lastName, dob) { //when you start a constructor function it should start with a capital letter. 
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); //new Date(dob) turns the date of birth into a new date object which can be interacted with.
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('mary', 'Smith', '3-6-1970');

console.log(person2.dob.getFullYear()); //Gets the year born for person2

console.log(person1.getFullName()); //gets full name of John Doe

//This isn't the best way to do it.

//ES6 or ES2015 added classes

//Class
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;

    }
}

// __________________________________________________________________
// __________________________________________________________________
// __________________________________________________________________

//DOM and DOM Manipulation

// Use Index.html style.css and main.js from github notes
// https://github.com/BLKirkland/notes

// calculateAge() {
//     const diff = Date.now() = this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
// }