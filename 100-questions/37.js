// Write a program which can map() and filter() to make a list whose elements are square of even number in [1,2,3,4,5,6,7,8,9,10].

function list(a) {
    const arr1 = a.map((e) => { return e ** 2 })
    const filter = arr1.filter((e) => { return e % 2 == 0 })
    console.log(filter)
}
list([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])