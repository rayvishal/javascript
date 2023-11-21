// Write a program which accepts a sequence of words separated by whitespace as input to print the words composed of digits only.

// Example: If the following words is given as input to the program:

// 2 cats and 3 dogs.
// Then, the output of the program should be:

// ['2', '3']
function digits(words) {
    const text = words.split(' ')
    const digit = []

    for (let i = 0; i < text.length; i++) {
        if (isNaN(text[i])) {

        } else { digit.push(text[i]) }
    }
    console.log(digit)
}
digits('2 cats and 3 dogs')