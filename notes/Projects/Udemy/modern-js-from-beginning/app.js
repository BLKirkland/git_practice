// Log to console

console.log('Hello World');
var greeting = 'Hello';
console.log(greeting);
console.log([1, 2, 3, 4]);
console.log({a:1, b:2});
console.table({a:1, b:2});
console.error('This is some error');
console.clear();
console.warn('This is a warning');
console.time('Hello'); // gives time it takes to run
    console.time('Hello World');
console.timeEnd('Hello');

// Variables
// var, let, const

//Types of Data Types

//Primitive - 
// Stored directly in the location the variable accesses
// Stored on the stack

// String
// Number
// Boolean
// Null
// Undefined
// Symbols (ES6)
const sym = Symbol();

//Reference - 
// Accessed by reference
// Objects that are stored on the heap
// A pointer to a location in memory

// Arrays
// Object Literals
// Functions
// Dates
// Anything Else

// Dynamically Typed Language

//__________________________

//Type Conversion

let val;

// Number to String
val = String(5);
val = String(4+4);
// Boolean
val = String(true);
// Date
val = String(new Date());
// Array
val = String([1,2,3,4]);

//toString
val = (5).toString();
val = (true).toString();

//____________

// String to number
val = Number('5');
val = ('5').toNumber();

val = parseInt('100');
val = parseFloat('100.31');

//Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());

// Type Coersion

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);

// ______________________________________

//Simple Math with numbers

const num1 = 100;
const num2 = 50;
let val;

// + * - / %

//Math Object

val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.4);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-3);
val = Math.pow(8, 2);
val = Math.min(2,33,4,1,55,6,3);
val = Math.max(1, 4, 56, 2);
val = Math.random(); //gives random decimal
val = Math.floor(Math.random() * 20 + 1); //gives random number between 1-20 rounding the decimal place down to the nearest integer

console.log(val);

//String Methods and Concatenation

const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstName + lastName;
//concatenation
val = firstName + ' ' + lastName;
// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstName + ' and I am ' + age;

//escaping
val = 'That\'s awesome, I can\'t wait';

//Length
val = firstName.length;
//cancat
val = firstName.concat(' ', lastName);
//Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();
val = firstName[0];

//indexOf()
val = firstName.indexOf('l');
val = firstName.lastIndexOf('l');
//charAt()
val = firstName.charAt(2);
//get last char
val = firstName.charAt(firstName.length - 1);
// substring
val = firstName.substring(0, 4); //Will
// slice
val = firstName.slice(0,4); //Will
val = firstName.slice(-3); //iam
// split
val = str.split(' ');
val = tags.split(',');
console.log(val);
// replace
val = str.replace('Brad', 'Jack');
// includes
val = str.includes('Hello');

//___________________________________________________
// Template Literals

const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'Miami';

function hello(){
    return 'hello';
}

html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
        <li> ${2+2}</li>
        <li>${hello()}</li>
        <li> ${age > 30 ? 'Over 30' : 'Under 30'}</li>
    </ul>
`; //backticks for template literals/strings

// ? = if
// : = else

document.body.innerHTML = html;

//__________________________________________
//Arrays and array methods

const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(33,45,33,76,54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let val;

// Length
val = numbers.length;
//check if is array
val = Array.isArray(numbers);
// Get single value
val = numbers[3];
// insert in array
numbers[2] = 100;
// find index of value
val = numbers.indexOf(36);

// Mutating Arrays
numbers.push(250); //add to end
numbers.unshift(120); //add to beginning
numbers.pop(); //take off last value
numbers.shift(); //take off first value
numbers.splice(1, 1); //take out number from x, y
numbers.reverse(); //reverse array

// Concatenate Arrays
val = numbers.concat(numbers2);

// Sort Arrays
val = fruit.sort();
val = numbers.sort(); //sorting numbers sorts only first number DON'T USE

// Sorting numbers using the compare function
val = numbers.sort(function(x, y){
    return x - y;
}); 

// Reverse Sort
val = numbers.sort(function(x, y){
    return y - x;
}); 

//Find first number under 50 in array
function under50(num){
    return num < 50;
}
val = numbers.find(under50);

//Find first number over 50 in array
function over50(num){
    return num < 50;
}
val = numbers.find(over50);

console.log(numbers);
console.log(val);

//If

// if(something){
//     do something
// } else {
//     do something else
// };

const id = 100;

// Equal to
// if(id == 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // not Equal to
// if(id != 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// == is equal
// === is equal with type checking
// != Not equal
// !== Not equal to value and type

if(id){
    console.log(`The ID is ${id}`);
} else {
    console.log
}

// If Else
const color = 'yellow';

if(color === red){
    console.log('Color is red');
}else if(color === 'blue'){
    console.log('Color is blue');
}else {
    console.log('Color is not red or blue');
}
// Logical Operators

const name = 'Steve';
const age = 20;

if(age > 0 && age <= 12){
    console.log(`${name} is a child`);
} else if (age >= 13 && age < 18) {
    console.log(`${name} is a teenager`);
} else if (age >= 18 && age < 21) {
    console.log(`${name} is a young adult`);
} else {
    console.log(`${name} is an adult`);
}

// DOM Selection

// Single Element Selectors

console.log(document.getElementById());

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change Styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

//Change content

taskTitle.textContent = 'Task List'; 
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span="color:red">Task List</span>';

// document.querySelector();

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'red';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';

// Multi-Selectors

// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems);

// document.getElemntsByTagName
// let lis = document.getElementsByClassName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'hello';

// // Convert HTML collection into array
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// });

// document.quertSelectorAll

const items = document.querySelectorAll('ul.collection li.collection-item');
console.log(items);

const liOdd = document.querySelectorAll('li:nth-child(odd)');

// Traversing the DOM

let val;

const list = document.querySelector('ul-collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list;

// get child nodes (returns a node list)
val = list.childNodes;
//  get children element nodes (returns an html collection)
val = list.children;
// children of children
val = list.children[3].children[0].id = 'test-link';

val = list.firstChild; // first node
val = list.firstElementChild; // first element (no text nodes)

//count
val = list.childElementCount; //element count

//get parent node
val = listItem.parentNode;
val = listItem.parentElement;

console.log(val);

//
// Create element

const li = document.createElement('li');
// add class
li.className('collections-item');
// add id
li.id = 'new-item';
// add attribute
li.setAttribute('title', 'New Item');

// creat text node and append
li.appendChild(document.createTextNode('Hello World'));

// create new link element
const link = document.createElement('a');

// add classes
link.className = 'delete-item secondary-content';

// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// append link to li
li.appendChild(link);
// append li as child to ul
document.querySelector('ul.collection').appendChild(li);
console.log(li);
console.log(object);

// 
// removing and replacing elements

// replace elements
// create element

const newHeading = document.createElement('h2');

// add id
newHeading.id = 'task-title';

// new text node
newHeading.appendChild(document.createTextNode('Task List'));

// get the old heading
const oldHeading = document.getElementById('task-title');

// parent
const cardAction = document.querySelector('.card-action');

// replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

// 
// Event Bubbling and Delegation

// Bubbling - events bubble up the DOM to their parents

document.querySelector('.card-title').addEventListener('click',
function(){
    console.log('card title');
});

document.querySelector('.card-content').addEventListener('click',
function(){
    console.log('card content');
});

document.querySelector('.card').addEventListener('click',
function(){
    console.log('card');
});

document.querySelector('.col').addEventListener('click',
function(){
    console.log('col');
});

// All of these events fire off when clicking because of bubbling

// Event Delegation

document.body.addEventListener('click', deleteItem);

function deleteItem(e){
    // if(e.target.parentElement.className === 'delete-item secondary-content'){
    //     console.log('delete-item');
    // }

    if(e.target.parentElement.classList.contains('delete-item')){
        console.log('delete-item');
        e.target.parentElement.parentElement.remove();
    }
}

// This block of code adds a click event listener to the body of the document and runs the function deleteItem. If the parent element of the click target contains the class 'delete-item' it removes the parent of the parent of the click item.

// 
// Local and Session storage

// //set local storage item

// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');
// localStorage.setItem('name', 'John');

// //set session storage item

// sessionStorage.setItem('name', "Beth");

// // remove from storage

// localStorage.removeItem('name');

// // get from storage
// const name = localStorage.getItem('name');
// const age = localstorage.getItem('age');
// console.log(name);

document.querySelector('form').addEventListener('submit', 
function(e){
    const task = document.getElementById('task').value;

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert('Tasks Saved')

    e.preventDefault();
});

// To store more than one task add them to an Array

const tasks = JSON.parse(localStorage.getitem('tasks'));
tasks.forEach(function(task){
    console.log(task);
});