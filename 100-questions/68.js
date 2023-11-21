// By using list comprehension, please write a program to print the list after removing the value 24 in [12,24,35,24,88,120,155].

function removing24() {
    const arr = [12, 24, 35, 24, 88, 120, 155]

    const filteredArray = arr.filter((e, index) => { return e !== 24 })
    console.log(filteredArray)
}
removing24()