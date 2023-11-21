// Please write a program to output a random number, which is divisible by 5 and 7, between 10 and 150 inclusive using random module and list comprehension.
function arrRandom() {
    const randomArr = [];
    for (let i = 0; ; i++) {
        if (randomArr.length == 5) {
            break;
        } else {
            var randomNumber = Math.floor(Math.random() * (141) + 10);
            if (randomNumber % 5 == 0 && randomNumber % 7 == 0) {
                randomArr.push(randomNumber)
            }
        }
    }
    console.log(randomArr)
}
arrRandom()