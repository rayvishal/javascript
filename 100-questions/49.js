// The Fibonacci Sequence is computed based on the following formula:

// f(n)=0 if n=0
// f(n)=1 if n=1
// f(n)=f(n-1)+f(n-2) if n>1
// Please write a program to compute the value of f(n) with a given n input by console.

// Example: If the following n is given as input to the program:

// 7
// Then, the output of the program should be:

// 0,1,1,2,3,5,8,13
function* simpleGenerator(num) {
    const arr = []
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            arr.push(i)
        }
    }
    yield arr;
}
const generator = simpleGenerator(10);
console.log(generator.next().value.join())