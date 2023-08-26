// Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array

function myFunction(a) {
    return a.splice(-3)
}
myFunction([6, 3, 6, 3]);