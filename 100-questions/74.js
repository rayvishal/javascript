// Write a Python program that accepts a string and calculate the number of digits and letters.
function string(str) {

    const Digits = [];
    const letters = []
    if (typeof str === "string") {
        for (let i = 0; i < str.length; i++) {
            if (isNaN(str[i])) {
                letters.push(str[i])
            } else {
                Digits.push(str[i])
            }
        }
    }
    console.log(`Digit-${Digits.length}`)
    console.log(`Letter-${letters.length}`)
}
string("Hello321Bye360")