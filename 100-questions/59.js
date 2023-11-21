// Please write a program to randomly generate a list with 5 numbers, which are divisible by 5 and 7 , between 1 and 1000 inclusive.

function RandomArr() {
    const randomArr = [];
    for (let i = 0; ; i++) {
        if (randomArr.length == 5) {
            break;
        } else {
            var randomNumber = Math.floor(Math.random() * 1000) + 1;
            if (randomNumber % 5 == 0 && randomNumber % 7 == 0) {
                randomArr.push(randomNumber)
            }
        }
    }
    console.log(randomArr)
}
RandomArr()