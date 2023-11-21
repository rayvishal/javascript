// Use a list comprehension to square each odd number in a list. The list is input by a sequence of comma-separated numbers. >Suppose the following input is supplied to the program:

function squareOddN(list) {
    const arr1 = list.split(',')
    const arr2 = []
    const arr3 = []
    console.log(arr1)
    arr1.map((e) => {
        e % 2 !== 0 ? arr2.push(+e) : null
    })
    arr2.map((e) => { arr3.push(e ** 2) })
    console.log(arr3.join())
}
squareOddN('1,2,3,4,5,6,7,8,9')