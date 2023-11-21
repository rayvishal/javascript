// Please write a program to generate a list with 5 random numbers between 100 and 200 inclusive.

function arrRandom() {
    const randomArr = [];
    for (let i = 0; ; i++) {
        if (randomArr.length == 5) {
            break;
        } else {
            var randomNumber = Math.floor(Math.random() * (101) + 100);
            randomArr.push(randomNumber)
        }
    }
    console.log(randomArr)
}
arrRandom()