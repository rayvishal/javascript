// Please write a program which count and print the numbers of each character in a string input by console.

// Example: If the following string is given as input to the program:

// abcdefgabc
// Then, the output of the program should be:

// a,2
// c,2
// b,2
// e,1
// d,1
// g,1
// f,1
function count(str) {
    const text = str.split("")
    const obj = {};
    text.forEach((e) => {
        if (!obj.hasOwnProperty(e)) {
            obj[e] = 1;
        } else { obj[e] = obj[e] + 1 }
    })
    console.log(obj)

}
count("abcdefgabc")