// Define a function which can generate and print a tuple where the value are square of numbers between 1 and 20 (both included).

function arrOfSquare() {
    const arrSquare = []
    for (let i = 1; i <= 20; i++) {
        arrSquare.push(i ** 2)
    }


    console.log(`(${arrSquare.join()})`)
}
arrOfSquare()