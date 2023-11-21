// Write a program that accepts a sequence of whitespace separated words as input and prints the words after removing all duplicate words and sorting them alphanumerically.

function removeDuplicate(text) {
    const arr = text.split(' ');
    // console.log(arr)
    const arr2 = [];
    arr.forEach((e, index) => { if (!arr2.includes(e)) { arr2.push(e) } })
    console.log((arr2.sort()).join(' '))
};
removeDuplicate("hello world and practice makes perfect and hello world again")