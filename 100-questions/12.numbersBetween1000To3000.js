// Write a program, which will find all such numbers between 1000 and 3000 (both included) such that each digit of the number is an even number.The numbers obtained should be printed in a comma-separated sequence on a single line.

function cal(s) {
    const sorted = []
    const arr = []
    for (let i = 1000; i <= 3000; i++) {
        arr.push(String(i))
    }

    arr.map((e) => {
        for (let i = 0; i <= e.length - 1; i++) {

            if (e[i] % 2 === 0) {
                if (e[i] == e[e.length - 1] && i == e.length - 1) {
                    sorted.push(e)
                }
            } else {
                break;
            }

        }
    })
    console.log(sorted.join())

}
cal()
