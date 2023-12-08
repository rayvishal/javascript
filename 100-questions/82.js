// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

// Examples
// numbersSum([1, 2, "13", "4", "645"]) ➞ 3

// numbersSum([true, false, "123", "75"]) ➞ 0

// numbersSum([1, 2, 3, 4, 5, true]) ➞ 15
function numberSum(array) {
    const newArr = [];
    array.forEach((e) => { if (typeof e == "number") { newArr.push(e) } else { newArr.push(0) } })

    const ans = newArr.reduce((a, b) => { return a + b })
    console.log(ans)
};
numberSum([1, 2, 3, 4, 5, true])