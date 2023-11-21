// Define a function which can generate a dictionary where the keys are numbers between 1 and 20 (both included) and the values are square of keys. The function should just print the keys only.
function dictionary() {
    const dictionary = {}
    for (let i = 1; i <= 20; i++) {
        dictionary[i] = i ** 2
    }
    for (let key in dictionary) {
        console.log(key)
    }
}
dictionary()