// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

function dividesEvenly(a, b) {
    let ans = a / b;
    console.log(ans % 2 === 0 ? true : false)
}
dividesEvenly(85, 4)