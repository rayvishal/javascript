// With two given lists [1,3,6,78,35,55] and [12,24,35,24,88,120,155], write a program to make a list whose elements are intersection of the above given lists.
function intersection() {
    const arr1 = [1, 3, 6, 78, 35, 55];

    const arr2 = [12, 24, 35, 24, 88, 120, 155];
    const intersection = arr1.filter((e) => { return arr2.includes(e) })
    console.log(intersection)

}
intersection()
