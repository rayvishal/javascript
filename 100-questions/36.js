// Write a program which can map() to make a list whose elements are square of elements in [1,2,3,4,5,6,7,8,9,10].
function list() {
    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const mappedArr = arr1.map((e) => {
        return e ** 2
    })
    console.log(mappedArr)
}
list();