// Please write a program to shuffle and print the list [3,6,7,8].
function shuffle() {
    const suffleArr = [];
    const arr = [3, 6, 7, 8];

    for (let i = 1; ; i++) {
        const randomNum = Math.floor(Math.random() * (8 - 3 + 1)) + 3;
        if (suffleArr.length == 4) {
            break;
        } else {
            if (arr.includes(randomNum) && !suffleArr.includes(randomNum)) {
                suffleArr.push(randomNum)
            }
        }
    }
    console.log(suffleArr)

}
shuffle();

