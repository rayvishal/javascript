// Write a function that takes an array of strings as argument. Return the longest string.
function myFunction(arr) {
    console.log(arr.reduce((longest, current) => {
        return current.length > longest.length ? current : longest
    }))
}
myFunction(['vishal', 'vkramray', 'anjaliray']);