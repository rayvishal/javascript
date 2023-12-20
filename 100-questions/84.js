// Your job is to create a function, that takes 3 numbers: a, b, c and returns true if the last digit of a * b = the last digit of c. Check the examples below for an explanation.

// Examples
// lastDig(25, 21, 125) ➞ true
// The last digit of 25 is 5, the last digit of 21 is 1, and the last
// digit of 125 is 5, and the last digit of 5*1 = 5, which is equal
// to the last digit of 125(5).

// lastDig(55, 226, 5190) ➞ true
// The last digit of 55 is 5, the last digit of 226 is 6, and the last
// digit of 5190 is 0, and the last digit of 5*6 = 30 is 0, which is
// equal to the last digit of 5190(0).

// lastDig(12, 215, 2142) ➞ false
// The last digit of 12 is 2, the last digit of 215 is 5, and the last
// digit of 2142 is 2, and the last digit of 2*5 = 10 is 0, which is
// not equal to the last digit of 2142(2).

function lastDig(a, b, c) {
    const firstArgu = String(a).split("");
    const fst = firstArgu.map((e) => { return +e })
    const secArgu = String(b).split('');
    const sec = secArgu.map((e) => { return +e })
    const thirdArgu = String(c).split("");

    const third = thirdArgu.map((e) => { return +e })

    const multiply = fst[fst.length - 1] * sec[sec.length - 1];
    const lastMultiply = String(multiply)

    if (lastMultiply[lastMultiply.length - 1] == third[third.length - 1]) {
        return true
    } else {
        return false
    }

};
console.log(lastDig(25, 21, 125))