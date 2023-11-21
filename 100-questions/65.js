// By using list comprehension, please write a program to print the list after removing the 0th, 2nd, 4th,6th numbers in [12,24,35,70,88,120,155].

function removing() {
    const arr = [12, 24, 35, 70, 88, 120, 155];
    const newArr = [];
    arr.map((e, index) => {

        if (index == 0 || index == 2 || index == 4 || index == 6) {

        } else {
            newArr.push(e)
        }
    })
    console.log(newArr)
}
removing()