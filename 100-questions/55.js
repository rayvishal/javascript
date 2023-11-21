// Please write a program to output a random even number between 0 and 10 inclusive using random module and list comprehension.

function generateRandom() {
    const arr = []
    for (let i = 0; i <= 10; i++) {
        const floatNum = Math.floor(Math.random() * 10);

        if (floatNum % 2 == 0) {
            if (!arr.includes(floatNum))
                arr.push(floatNum)
        }
    }

    console.log(arr)
}
generateRandom()