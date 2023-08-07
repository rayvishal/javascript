// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.
function makesTen(a, b) {
    console.log(a === 10 || b === 10 || a + b === 10 ? true : false)
}
makesTen(1, 9)