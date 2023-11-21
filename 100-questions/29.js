// Define a function which can generate a list where the values are square of numbers between 1 and 20 (both included). Then the function needs to print the first 5 elements in the list.
function arrOfSquare() {
    const arrSquare = []
    for (let i = 1; i <= 20; i++) {
        arrSquare.push(i ** 2)
    }
    const arrSlice = arrSquare.slice(0, 5)
    console.log(arrSlice)
}
arrOfSquare()