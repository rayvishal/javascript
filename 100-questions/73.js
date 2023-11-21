// Please write a program which accepts a string from console and print the characters that have even indexes.

// Example: If the following string is given as input to the program:

// H1e2l3l4o5w6o7r8l9d
// Then, the output of the program should be:

// Helloworld
function evenIndexes(text) {
    const arr = []
    if (typeof text === "string") {
        for (let i = 0; i <= text.length; i++) {
            arr.push(text[i])
            i = i + 1
        }
    }
    console.log(arr.join(''))
}
evenIndexes("H1e2l3l4o5w6o7r8l9d")
