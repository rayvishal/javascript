// Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.
function returnNegative(num) {
    console.log(num < 0 || num === 0 ? num : -num)
}
returnNegative(4)