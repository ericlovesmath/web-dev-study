"use strict";

// Basics
console.log(typeof String(Boolean(Number("10"))));

// Nullish Operator: a ?? b -> if (a is null) {a} else {b}
let height = null;
let width = null;

let area = (height ?? 100) * (width ?? 50);
console.log(area)

// for and if
for (let i = 0; i < 5; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
}

// Function
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
console.log(parseInt('12.5em')); // 12
console.log(parseInt('0xff', 16)); // 255

// TODO: Make String quick reference

// Arrays
let fruits = ["Apple", "Orange", "Plum"];
fruits.shift();          // First Elem Pop
fruits.pop();            // Last Elem Pop
fruits.unshift('Apple'); // Prepend
fruits.push("Pear");     // Append
console.log(fruits, fruits.length);
