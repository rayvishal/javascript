// Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.
function myFunction(arr) {
    return (arr.sort((a, b) => {
        return (b - a)
    }))
}
myFunction([1, 3, 2]);