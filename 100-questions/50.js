// Please write a program using generator to print the numbers which can be divisible by 5 and 7 between 0 and n in comma separated form while n is input by console.
function* simpleGenerator(num) {
    const arr = []


    for (let i = 0; i <= num; i++) {
        if (i % 5 == 0 && i % 7 == 0) {
            arr.push(i)
        }
    }
    yield arr;
}

const generator = simpleGenerator(100);
console.log(generator.next().value.join())