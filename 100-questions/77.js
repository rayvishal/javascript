function triangularSequence(input) {
    const numbers = []
    for (let i = 1; i < 1000; i++) {
        if (i == 1) {
            numbers.push(i)

        } else if (i == 2) {
            numbers.push(3)
            //   let num=numbers[i-1]+i
            //   numbers.push(num)
        } else {
            let num = numbers[i - 2] + i
            numbers.push(num)
        }

    }
    console.log(numbers[input - 1])
}
triangularSequence(215)
function repdigit(digit) {
    const arr = (digit + "").split("");
    console.log(arr)
    for (let num of arr) {

    }
    // if(digit>0&&){

    // }
};
repdigit(55)