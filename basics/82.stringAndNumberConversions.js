// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

function intoString(int) {
    const num = (int + "")
    console.log(typeof num)
}
function stringToInt(str) {
    const strin = (parseInt(str))
    console.log(typeof strin)
}
intoString(6);
stringToInt('5')