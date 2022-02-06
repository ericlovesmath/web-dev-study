function fizzbuzz(start, end) {
    for (var i = start; i <= end; i++) {
        console.log(i % 15 == 0 ? "Fizzbuzz" :
            i % 3 == 0 ? "Fizz" :
                i % 5 == 0 ? "Buzz" :
                    i);
    }
}
function numToRoman(num) {
    var roman_to_int = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    };
    var answer = "";
    for (var _i = 0, _a = Object.keys(roman_to_int); _i < _a.length; _i++) {
        var roman = _a[_i];
        while (roman_to_int[roman] <= num) {
            answer += roman;
            num -= roman_to_int[roman];
        }
    }
    return answer.toString();
}
function encryptVignere(phrase, key) {
    var answer = "";
    var key_i = 0;
    for (var i = 0; i < phrase.length; i++) {
        if (phrase[i] == " ") {
            answer += " ";
        }
        else {
            var a = phrase.charCodeAt(i) - 65;
            var b = key.charCodeAt(key_i) - 65;
            answer += String.fromCharCode((a + b) % 26 + 65);
            key_i = (key_i == key.length - 1) ? 0 : key_i + 1;
        }
    }
    return answer;
}
function decryptVignere(phrase, key) {
    var answer = "";
    var key_i = 0;
    for (var i = 0; i < phrase.length; i++) {
        if (phrase[i] == " ") {
            answer += " ";
        }
        else {
            var a = phrase.charCodeAt(i) + 26;
            var b = key.charCodeAt(key_i);
            answer += String.fromCharCode((a - b) % 26 + 65);
            key_i = (key_i == key.length - 1) ? 0 : key_i + 1;
        }
    }
    return answer;
}
function main() {
    // fizzbuzz(1, 20);
    console.log(numToRoman(438));
    var a = encryptVignere("HELLO WELCOME TO TYPESCRIPT", "KEY");
    var b = decryptVignere(a, "KEY");
    console.log(b);
}
main();
