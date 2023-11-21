// Given a number N.Find Sum of 1 to N Using Recursion

function recursionUsed(num) {
    if (num == 1) { return 1 };
    return num + recursionUsed(num - 1)

}
console.log(recursionUsed(5))