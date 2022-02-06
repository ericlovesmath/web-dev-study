function fizzbuzz(start: number, end: number): void {
    for (let i: number = start; i <= end; i++) {
        console.log(i % 15 == 0 ? "Fizzbuzz" :
            i % 3 == 0 ? "Fizz" :
                i % 5 == 0 ? "Buzz" :
                    i
        )
    }
}

function numToRoman(num: number): string {
    let roman_to_int = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1
    };
    let answer: string = "";
    for (let roman of Object.keys(roman_to_int)) {
        while (roman_to_int[roman] <= num) {
            answer += roman;
            num -= roman_to_int[roman]
        }
    }
    return answer.toString();
}

function encryptVignere(phrase: string, key: string): string {
    let answer: string = "";
    let key_i: number = 0;
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] == " ") {
            answer += " ";
        } else {
            let a: number = phrase.charCodeAt(i) - 65;
            let b: number = key.charCodeAt(key_i) - 65;
            answer += String.fromCharCode((a + b) % 26 + 65);
            key_i = (key_i == key.length - 1) ? 0 : key_i + 1;
        }
    }
    return answer;
}

function decryptVignere(phrase: string, key: string): string {
    let answer: string = "";
    let key_i: number = 0;
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] == " ") {
            answer += " ";
        } else {
            let a: number = phrase.charCodeAt(i) + 26;
            let b: number = key.charCodeAt(key_i);
            answer += String.fromCharCode((a - b) % 26 + 65);
            key_i = (key_i == key.length - 1) ? 0 : key_i + 1;
        }
    }
    return answer;
}

function main() {
    // fizzbuzz(1, 20);
    console.log(numToRoman(438));
    let a: string = encryptVignere("HELLO WELCOME TO TYPESCRIPT", "KEY");
    let b: string = decryptVignere(a, "KEY");
    console.log(b);
}

main()
