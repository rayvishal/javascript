// Write a program to compute 1/2+2/3+3/4+...+n/n+1 with a given n input by console (n>0).

// Example: If the following n is given as input to the program:

// 5
// Then, the output of the program should be:

// 3.55
function compute(num) {
    if (num > 0) {
        const arr = []
        for (let i = 1; i <= num; i++) {
            arr.push(i / (i + 1))
        }
        const sum = arr.reduce((a, b) => { return a + b })
        console.log(sum.toFixed(2))
    } else {
        alert("Number should not be less than zero")
    }
}
compute(0)