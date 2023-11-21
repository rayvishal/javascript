// Write a program which accepts a sequence of comma separated 4 digit binary numbers as its input and then check whether they are divisible by 5 or not. The numbers that are divisible by 5 are to be printed in a comma separated sequence.

function binary(num) {
    const arr1 = num.split(',')
    const arr2 = []
    const numbers = []
    arr1.map((e) => {

        const decimal = parseInt(e, 2)
        decimal % 5 == 0 ? arr2.push(decimal.toString(2)) : null



    })
    console.log(arr2.join())

}
binary('0100,0011,1010,1001')