// Please write a program to print the list after removing even numbers in [5,6,77,45,22,12,24].

function removeEven() {
    const arr = [5, 6, 77, 45, 22, 12, 24]
    const newArr = arr.filter((e) => { return e % 2 !== 0 })
    console.log(newArr)
}

removeEven();
