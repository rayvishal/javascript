// Write a program to generate and print another tuple whose values are even numbers in the given tuple (1,2,3,4,5,6,7,8,9,10).
function array() {
    const arr2 = []
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    arr.forEach((e) => {
        if (e % 2 == 0) {
            arr2.push(e)
        }
    })
    console.log(arr2)

}
array()