// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// Examples
// printArray(1) ➞ [1]

// printArray(3) ➞ [1, 2, 3]

// printArray(6) ➞ [1, 2, 3, 4, 5, 6]

function printArray(number) {
    var newArray = [];
    for (let num = 1; num <= number; num++) {
        newArray.push(num)
    }
    console.log(newArray)
}
printArray(4);