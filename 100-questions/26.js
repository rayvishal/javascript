// Define a function which can print a dictionary where the keys are numbers between 1 and 20 (both included) and the values are square of keys.
function dictionary() {
    const dictionary = {}
    for (let i = 1; i <= 20; i++) {
        dictionary[i] = i ** 2
    }
    console.log(dictionary)
}
dictionary()