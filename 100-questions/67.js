// By using list comprehension, please write a program to print the list after removing the 0th,4th,5th numbers in [12,24,35,70,88,120,155].

function removing() {
    const arr = [12, 24, 35, 70, 88, 120, 155];
    const indeces = [0, 4, 5];
    const filteredArray = arr.filter((e, index) => { return !indeces.includes(index) })
    console.log(filteredArray)
}
removing()