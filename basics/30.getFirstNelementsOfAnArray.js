// Write a function that takes an array (a) as argument. Extract the first 3 elements of a. Return the resulting array
function myFunction(a) {
    return a.splice(0, 3)
}
myFunction([3, 5, 6, 6, 2])