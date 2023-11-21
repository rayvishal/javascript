// Write a program which can map() to make a list whose elements are square of numbers between 1 and 20 (both included).
function list(a) {
    const numbers = []
    for (let i = 1; i <= 20; i++) {
        numbers.push(i)
    }
    const evenNumbers = numbers.map((e) => { return e ** 2 })
    console.log(evenNumbers)
}
list()
