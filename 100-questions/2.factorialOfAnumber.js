// Write a program which can compute the factorial of a given numbers.The results should be printed in a comma-separated sequence on a single line.Suppose the following input is supplied to the program: 8 Then, the output should be:40320

function factorial(num) {
    let product = 1;
    for (let i = 1; i <= num; i++) {
        product = product * i
    }
    console.log(product)
}
factorial(8)