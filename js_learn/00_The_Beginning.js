let message = 'Hello World!';
console.log(message);

let user = 'John',
    age = 25,
    note = 'Hello';

const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
console.log(typeof color)
console.log(color);

let x = 0xFF;
console.log(x)

// STRINGS

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
console.log(+apples + +oranges); // 5

let myString = '123';
let myNum = Number(myString);
let myString2 = myNum.toString();
console.log(typeof myString2)

// F-strings in Javascript
let song = "Friday";
let score = 9;
let highestScore = 10;
let output = `I like the song "${song}", scoring it ${score / highestScore * 100}%.`;
console.log({ output })

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt.length);
console.log(txt.slice(7, 13));
console.log(txt.substr(7, 6));
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

// CONDITIONALS
let time = 12;
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

switch (new Date().getDay()) {
    default:
        text = "Looking forward to the Weekend";
        break;
    case 6:
        text = "Today is Saturday";
        break;
    case 0:
        text = "Today is Sunday";
}

let isBirthday = true;
let greeting = (isBirthday) ? 'Happy birthday' : 'Good morning';

