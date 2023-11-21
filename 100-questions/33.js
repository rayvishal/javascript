// With a given tuple (1,2,3,4,5,6,7,8,9,10), write a program to print the first half values in one line and the last half values in one line.
function array() {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(arr.slice(0, 5).join())
    console.log(arr.slice(-5).join())

}
array()
