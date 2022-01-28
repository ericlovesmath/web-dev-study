"use strict";

// Basics
console.log(typeof String(Boolean(Number("10"))));

// Nullish Operator: a ?? b -> if (a is null) {a} else {b}
let height = null;
let width = null;

let area = (height ?? 100) * (width ?? 50); console.log(area)
// for and if
for (let i = 0; i < 5; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
}

// Function (Pass by Reference Copy)
function getMsg(from, text = "No message") {
    return from + ': ' + text;
}

console.log(getMsg('Eric', 'Hello!'));

// ES6 Arrow Func
let sum = (a, b) => a + b;
let multilineSum = (a, b) => {
    let result = a + b;
    return result;
};

// Objects
let empty_user = new Object();
let user = {
    name: "John",
    age: 30,
    "likes birds": true,
    sayHi() {
        console.log(this.name);
    },
};

delete user.name;
console.log(user.age, user["age"]);
console.log("name" in user);

for (let key in user) {
    console.log(key);
}

//// Primitives ////

// Number
let conv_to_base_16 = 500..toString(16); // Decimal to notate Number. JS is... weird.
parseInt('12.5em'); // 12
parseInt('0xff', 16); // 255

// String
let a_string = "Hello";
a_string == "Hello";
a_string.length;
a_string[0];
a_string.indexOf('el'); // Returns index of first char, -1 if not found
a_string.includes('el');
a_string.startsWith('He');
a_string.endsWith('lo');
a_string.slice(1, 3); // To end if second arg is empty
a_string.substring(1, 2); // Second arg is length

// Arrays
let fruits = ["Apple", "Orange", "Plum"];
fruits.shift();          // First Elem Pop
fruits.pop();            // Last Elem Pop
fruits.unshift('Apple'); // Prepend
fruits.push("Pear");     // Append
fruits.length;
fruits.forEach(console.log); // map command
fruits.concat(["Peach", "Grape"]);
fruits.indexOf("Apple"); // -1 if false
fruits.includes("Apple");

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

users.find(item => item.id == 1); // {id: 1, name: "John"}
fruits.map(item => item.length);
fruits.sort();

// Map
let map = new Map();
map.set('1', 'str1');
map.get('1');
map.size;

// Classes
class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}

// Async/Await
async function f() {
  return 1;
}
f().then(console.log); // 1

// Imports
import {sayHi} from './sayHi.js';
sayHi("Eric");
