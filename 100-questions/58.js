// Please write a program to randomly generate a list with 5 even numbers between 100 and 200 inclusive.

function RandomEvenNum() {
    const randomArr = [];
    for (let i = 0; ; i++) {
        if (randomArr.length == 5) {
            break;
        } else {
            var randomNumber = Math.floor(Math.random() * (101) + 100);
            if (randomNumber % 2 == 0) {
                randomArr.push(randomNumber)
            }
        }
    }
    console.log(randomArr)
}
RandomEvenNum()