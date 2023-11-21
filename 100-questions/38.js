// Write a program which can filter() to make a list whose elements are even number between 1 and 20 (both included).
function list(a) {
    const numbers = []
    for (let i = 1; i <= 20; i++) {
        numbers.push(i)
    }
    const evenNumbers = numbers.filter((e) => { return e % 2 == 0 })
    console.log(evenNumbers)
}
list()