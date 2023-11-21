
// Please write a program which accepts a string from console and print it in reverse order.

// Example: If the following string is given as input to the program:*

// rise to vote sir
// Then, the output of the program should be:

// ris etov ot esir
function reverseOrder(text) {
    const arr = []
    for (let i = text.length - 1; ; i--) {
        arr.push(text[i])
        if (i == 0) {
            break;
        }
    }
    console.log(arr.join(""))
};
reverseOrder("rise to vote sir")