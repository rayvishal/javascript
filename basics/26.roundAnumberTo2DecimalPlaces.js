// Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number

function myFunction(a) {
    return (+a.toFixed(2))
}
myFunction(7.36637)