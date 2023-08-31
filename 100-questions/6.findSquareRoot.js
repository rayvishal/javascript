// Question:
// Write a program that calculates and prints the value according to the given formula:

// Q = Square root of [(2 _ C _ D)/H]

// Following are the fixed values of C and H:

// C is 50. H is 30.

// D is the variable whose values should be input to your program in a comma-separated sequence.For example Let us assume the following comma separated input sequence is given to the program:

// 100,150,180
// The output of the program should be:

// 18,22,24

function squareRoot(nums) {
    const arr2 = []
    const C = 50;
    const H = 30;
    const arr = nums.split(',')
    for (let D of arr) {
        D = Number(D)
        let squareroot = Math.sqrt((2 * C * D) / H)
        arr2.push(Math.round(squareroot))

    }
    console.log(arr2.join())


}
squareRoot('100,150,180')