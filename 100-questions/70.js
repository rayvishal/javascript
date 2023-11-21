// With a given list [12,24,35,24,88,120,155,88,120,155], write a program to print this list after removing all duplicate values with original order reserved.

function duplicate() {
    const arr = [12, 24, 35, 24, 88, 120, 155, 88, 120, 155];
    const arr2 = []
    arr.map((e) => { if (!arr2.includes(e)) { arr2.push(e) } })

    console.log(arr2)
}
duplicate()