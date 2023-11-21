// By using list comprehension, please write a program to print the list after removing numbers which are divisible by 5 and 7 in [12,24,35,70,88,120,155].

function divisibleBy5and7() {
    const arr = [12, 24, 35, 70, 88, 120, 155];
    const Newarr = arr.filter((e) => { return e % 5 !== 0 && e % 7 !== 0 })
    console.log(Newarr)


}
divisibleBy5and7()